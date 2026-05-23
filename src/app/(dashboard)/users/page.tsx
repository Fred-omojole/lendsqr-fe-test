import UserStatCard from "@/components/dashboard/StatCard/userStatCard";
import UsersTable from "@/components/dashboard/UsersTable/UsersTable";
import { generateUsers } from "@/lib/mockData";
import styles from "./page.module.scss";

type UserStatCardType = {
  icon: string;
  title: string;
  count: string;
};

const userStatCards: UserStatCardType[] = [
  { icon: "/image/user.png", title: "Users", count: "2,453" },
  { icon: "/image/activeUser.png", title: "Active Users", count: "2,453" },
  { icon: "/image/loan.png", title: "Users with Loans", count: "12,453" },
  { icon: "/image/savings.png", title: "Users with Savings", count: "102,453" },
];

export default function UsersPage() {
  const users = generateUsers(10);

  return (
    <div>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.statCards}>
        {userStatCards.map((card, index) => (
          <UserStatCard
            key={index}
            icon={card.icon}
            title={card.title}
            count={card.count}
          />
        ))}
      </div>
      <div className={styles.tableSection}>
        <UsersTable users={users} />
      </div>
    </div>
  );
}
