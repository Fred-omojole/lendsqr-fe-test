import Image from "next/image";
import styles from "./userStatCard.module.scss";

interface StatCardProps {
  icon: string;
  title: string;
  count: string;
}

const UserStatCard = ({ icon, title, count }: StatCardProps) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Image src={icon} alt="" width={40} height={40} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.count}>{count}</p>
      </div>
    </div>
  );
};

export default UserStatCard;
