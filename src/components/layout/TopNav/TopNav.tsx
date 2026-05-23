"use client";
import styles from "./TopNav.module.scss";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";

interface TopNavProps {
  onMenuClick?: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  return (
    <nav className={styles.navContainer}>
      <button
        type="button"
        className={styles.hamburger}
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <HiOutlineMenu size={24} />
      </button>

      <Image
        className={styles.logo}
        src="/image/Group.png"
        alt="Logo"
        width={173}
        height={36}
      />

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles.searchInput}
        />
        <button title="search" className={styles.searchIcon}>
          <Image src="/image/search.png" alt="Search" width={15} height={15} />
        </button>
      </div>

      <div className={styles.actionContainer}>
        <h3 className={styles.actionText}>Docs</h3>

        <Image
          className={styles.notificationIcon}
          src="/image/bell.png"
          alt="Notification"
          width={24}
          height={24}
        />

        <div className={styles.profile}>
          <Image
            className={styles.profileImage}
            src="/image/avatar.png"
            alt="Profile"
            width={50}
            height={50}
          />

          <p className={styles.profileName}>Adedeji</p>
          <Image
            className={styles.arrowIcon}
            src="/image/arrow.png"
            alt="Profile"
            width={20}
            height={20}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
