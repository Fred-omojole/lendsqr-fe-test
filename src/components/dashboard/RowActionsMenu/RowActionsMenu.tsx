"use client";
import { useRouter } from "next/navigation";
import { FiEye, FiUserX, FiUserCheck } from "react-icons/fi";
import { User } from "@/types/user";
import { saveUser } from "@/lib/storage";
import styles from "./RowActionsMenu.module.scss";

interface RowActionsMenuProps {
  user: User;
}

export default function RowActionsMenu({ user }: RowActionsMenuProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    saveUser(user);
    router.push(`/users/${user.id}`);
  };

  return (
    <div className={styles.menu}>
      <button type="button" className={styles.item} onClick={handleViewDetails}>
        <FiEye size={14} />
        <span>View Details</span>
      </button>
      <button type="button" className={styles.item}>
        <FiUserX size={14} />
        <span>Blacklist User</span>
      </button>
      <button type="button" className={styles.item}>
        <FiUserCheck size={14} />
        <span>Activate User</span>
      </button>
    </div>
  );
}
