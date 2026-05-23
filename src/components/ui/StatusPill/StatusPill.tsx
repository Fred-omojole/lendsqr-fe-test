import { Status } from "@/types/user";
import styles from "./StatusPill.module.scss";

const labels: Record<Status, string> = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
  blacklisted: "Blacklisted",
};

const StatusPill = ({ status }: { status: Status }) => {
  return (
    <span className={`${styles.pill} ${styles[status]}`}>{labels[status]}</span>
  );
};

export default StatusPill;
