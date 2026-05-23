"use client";
import { useState } from "react";
import TopNav from "@/components/layout/TopNav/TopNav";
import SideBar from "@/components/layout/Sidebar/SideBar";
import styles from "./dashboard.layout.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={styles.dashboardLayout}>
      <TopNav onMenuClick={() => setDrawerOpen(true)} />
      <div className={styles.dashboardBody}>
        <SideBar
          mobileOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}
