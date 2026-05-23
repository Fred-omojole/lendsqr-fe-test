"use client";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { User } from "@/types/user";
import StatusPill from "@/components/ui/StatusPill/StatusPill";
import Pagination from "@/components/ui/Pagination/pagination";
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

  const pageUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }, [users, currentPage, pageSize]);

  return (
    <>
      <div className={styles.tableCard}>
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
            {pageUsers.map(
              ({
                id,
                orgName,
                userName,
                email,
                phoneNumber,
                dateJoined,
                status,
              }) => (
                <tr key={id}>
                  <td>{orgName}</td>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{dayjs(dateJoined).format(DATE_FORMAT)}</td>
                  <td>
                    <StatusPill status={status} />
                  </td>
                  <td>
                    <button
                      type="button"
                      className={styles.moreBtn}
                      aria-label={`Actions for ${userName}`}
                    >
                      <Image
                        src="/image/more vert.png"
                        alt={""}
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ),
            )}
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
