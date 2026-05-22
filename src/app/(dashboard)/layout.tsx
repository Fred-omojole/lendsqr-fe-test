import TopNav from "@/components/layout/TopNav/TopNav";
import SideBar from "@/components/layout/Sidebar/SideBar";
import styles from "./dashboard.layout.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardLayout}>
      <TopNav />
      <div className={styles.dashboardBody}>
        <SideBar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}
