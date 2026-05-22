"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./sideBar.module.scss";
import { usePathname } from "next/navigation";

type NavItem = { label: string; icon: string; path: string };
type NavGroup = { groupName: string; items: NavItem[] };

const standaloneItems: NavItem[] = [
  { label: "Dashboard", icon: "/home 1.svg", path: "/dashboard" },
];

const navGroups: NavGroup[] = [
  {
    groupName: "Customers",
    items: [
      { label: "Users", icon: "/user-friends 1.svg", path: "/users" },
      { label: "Guarantors", icon: "/users 1.svg", path: "/guarantors" },
      { label: "Loans", icon: "/sack 1.svg", path: "/loans" },
      {
        label: "Decision Models",
        icon: "/handshake-regular 1.svg",
        path: "/decision-models",
      },
      { label: "Savings", icon: "/piggy-bank 1.svg", path: "/savings" },
      {
        label: "Loan Requests",
        icon: "/Group 104.svg",
        path: "/loan-requests",
      },
      { label: "Whitelist", icon: "/user-check 1.svg", path: "/whitelist" },
      { label: "Karma", icon: "/user-times 1.svg", path: "/karma" },
    ],
  },
  {
    groupName: "Businesses",
    items: [
      {
        label: "Organization",
        icon: "/briefcase 1.svg",
        path: "/organization",
      },
      {
        label: "Loan Products",
        icon: "/Group 104 (1).svg",
        path: "/loan-products",
      },
      {
        label: "Savings Products",
        icon: "/np_bank_148501_000000 1.svg",
        path: "/savings-products",
      },
      {
        label: "Fees and Charges",
        icon: "/coins-solid 1.svg",
        path: "/fees-charges",
      },
      { label: "Transactions", icon: "/icon.svg", path: "/transactions" },
      { label: "Services", icon: "/galaxy 1.svg", path: "/services" },
      {
        label: "Service Account",
        icon: "/user-cog 1.svg",
        path: "/service-account",
      },
      { label: "Settlements", icon: "/scroll 1.svg", path: "/settlements" },
      { label: "Reports", icon: "/chart-bar 2.svg", path: "/reports" },
    ],
  },
  {
    groupName: "Settings",
    items: [
      { label: "Preferences", icon: "/sliders-h 1.svg", path: "/preferences" },
      {
        label: "Fees and Pricing",
        icon: "/badge-percent 1.svg",
        path: "/fees-pricing",
      },
      {
        label: "Audit Logs",
        icon: "/clipboard-list 1.svg",
        path: "/audit-logs",
      },
    ],
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.scroll}>
        <button type="button" className={styles.switchOrg}>
          <span className={styles.iconWrap}>
            <Image src="/briefcase 1.svg" alt="" width={16} height={16} />
          </span>
          <span className={styles.label}>Switch Organization</span>
          <span className={styles.chevron}>
            <Image src="/chevron down.svg" alt="" width={14} height={14} />
          </span>
        </button>

        {standaloneItems.map(({ label, icon, path }) => {
          return (
            <Link href={path} key={label} className={styles.navItem}>
              <span className={styles.stripe} aria-hidden />
              <span className={styles.iconWrap}>
                <Image src={icon} alt="" width={16} height={16} />
              </span>
              <span className={styles.label}>{label}</span>
            </Link>
          );
        })}

        {navGroups.map(({ groupName, items }) => (
          <div key={groupName} className={styles.navGroup}>
            <p className={styles.groupName}>{groupName}</p>
            {items.map(({ label, icon, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  href={path}
                  key={label}
                  className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                >
                  <span className={styles.stripe} aria-hidden />
                  <span className={styles.iconWrap}>
                    <Image src={icon} alt="" width={16} height={16} />
                  </span>
                  <span className={styles.label}>{label}</span>
                </Link>
              );
            })}
          </div>
        ))}

        <div className={styles.footer}>
          <button type="button" className={styles.logout}>
            <span className={styles.iconWrap}>
              <Image src="/logout.svg" alt="" width={16} height={16} />
            </span>
            <span className={styles.label}>Logout</span>
          </button>
          <p className={styles.version}>v1.2.0</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
