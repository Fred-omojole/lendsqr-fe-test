"use client";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { User } from "@/types/user";
import StatusPill from "@/components/ui/StatusPill/StatusPill";
import Pagination from "@/components/ui/Pagination/pagination";
import UsersFilter from "@/components/dashboard/UsersFilter/UsersFilter";
import RowActionsMenu from "@/components/dashboard/RowActionsMenu/RowActionsMenu";
import styles from "./UsersTable.module.scss";
import Image from "next/image";

interface UsersTableProps {
  users: User[];
  initialPageSize?: number;
}

const columns = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const DATE_FORMAT = "MMM D, YYYY h:mm A";

const UsersTable = ({ users, initialPageSize = 10 }: UsersTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [filterOpen, setFilterOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const pageUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }, [users, currentPage, pageSize]);

  return (
    <>
      <div className={styles.tableCard}>
        {filterOpen && (
          <div className={styles.filterPopover}>
            <UsersFilter />
          </div>
        )}
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>
                  <div className={styles.th}>
                    <span>{col}</span>
                    <button
                      type="button"
                      className={styles.filterBtn}
                      aria-label={`Filter ${col}`}
                      onClick={() => setFilterOpen((v) => !v)}
                    >
                      <Image
                        src="/image/filter.png"
                        alt={""}
                        width={14}
                        height={14}
                      />
                    </button>
                  </div>
                </th>
              ))}
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {pageUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{dayjs(user.dateJoined).format(DATE_FORMAT)}</td>
                <td>
                  <StatusPill status={user.status} />
                </td>
                <td>
                  <div className={styles.moreWrap}>
                    <button
                      type="button"
                      className={styles.moreBtn}
                      aria-label={`Actions for ${user.userName}`}
                      onClick={() =>
                        setOpenMenuId((id) => (id === user.id ? null : user.id))
                      }
                    >
                      <Image
                        src="/image/more vert.png"
                        alt={""}
                        width={20}
                        height={20}
                      />
                    </button>
                    {openMenuId === user.id && (
                      <div className={styles.menuPopover}>
                        <RowActionsMenu user={user} />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={users.length}
        onPageChange={setCurrentPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />
    </>
  );
};

export default UsersTable;
