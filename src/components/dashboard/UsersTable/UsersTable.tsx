"use client";
import dayjs from "dayjs";
import { User } from "@/types/user";
import StatusPill from "@/components/ui/StatusPill/StatusPill";
import styles from "./UsersTable.module.scss";
import Image from "next/image";

interface UsersTableProps {
  users: User[];
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

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <div className={styles.tableCard}>
      <div>
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
            {users.map(
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
    </div>
  );
};

export default UsersTable;
