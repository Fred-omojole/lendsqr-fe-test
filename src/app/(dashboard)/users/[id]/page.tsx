"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { getUser, saveUser } from "@/lib/storage";
import { User } from "@/types/user";
import styles from "./page.module.scss";

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

function Field({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={styles.field}>
      <p className={styles.fieldLabel}>{label}</p>
      <p className={styles.fieldValue}>{value || "—"}</p>
    </div>
  );
}

export default function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cached = getUser(id);
    if (cached) {
      setUser(cached);
      setReady(true);
      return;
    }
    fetch(`/api/users/${id}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: User | null) => {
        if (data) {
          saveUser(data);
          setUser(data);
        }
        setReady(true);
      })
      .catch(() => setReady(true));
  }, [id]);

  if (!ready) return <p className={styles.message}>Loading…</p>;
  if (!user)
    return (
      <p className={styles.message}>
        User not found. <Link href="/users">Back to Users</Link>
      </p>
    );

  return (
    <div className={styles.page}>
      <Link href="/users" className={styles.back}>
        <MdArrowBack size={20} /> Back to Users
      </Link>

      <div className={styles.headerRow}>
        <h1 className={styles.heading}>User Details</h1>
        <div className={styles.headerActions}>
          <button type="button" className={styles.blacklistBtn}>
            BLACKLIST USER
          </button>
          <button type="button" className={styles.activateBtn}>
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className={styles.summaryCard}>
        <div className={styles.summaryTop}>
          <div className={styles.identity}>
            <div className={styles.avatar}>
              <FiUser size={40} />
            </div>
            <div>
              <p className={styles.userName}>{user.fullName}</p>
              <p className={styles.userId}>LSQ-{user.id.slice(0, 8)}</p>
            </div>
          </div>

          <div className={styles.vDivider} />

          <div className={styles.tierBlock}>
            <p className={styles.fieldLabel}>User&apos;s Tier</p>
            <div className={styles.tier}>
              <FaStar color="#E9B200" />
              <FaRegStar color="#E9B200" />
              <FaRegStar color="#E9B200" />
            </div>
          </div>

          <div className={styles.vDivider} />

          <div className={styles.balanceBlock}>
            <p className={styles.balance}>₦{user.monthlyIncome}</p>
            <p className={styles.bank}>{user.bvn}/Providus Bank</p>
          </div>
        </div>

        <nav className={styles.tabs}>
          {tabs.map((t, i) => (
            <button
              key={t}
              type="button"
              className={`${styles.tab} ${i === 0 ? styles.tabActive : ""}`}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.detailsCard}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Personal Information</h2>
          <div className={styles.grid}>
            <Field label="FULL NAME" value={user.fullName} />
            <Field label="PHONE NUMBER" value={user.phoneNumber} />
            <Field label="EMAIL ADDRESS" value={user.email} />
            <Field label="BVN" value={user.bvn} />
            <Field label="GENDER" value={user.gender} />
            <Field label="MARITAL STATUS" value={user.maritalStatus} />
            <Field label="CHILDREN" value={user.children || "None"} />
            <Field label="TYPE OF RESIDENCE" value={user.typeOfResidence} />
          </div>
        </section>

        <hr className={styles.hr} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education and Employment</h2>
          <div className={styles.grid}>
            <Field label="LEVEL OF EDUCATION" value={user.levelOfEducation} />
            <Field label="EMPLOYMENT STATUS" value={user.employmentStatus} />
            <Field label="SECTOR OF EMPLOYMENT" value={user.sectorOfEmployment} />
            <Field label="DURATION OF EMPLOYMENT" value={user.durationOfEmployment} />
            <Field label="OFFICE EMAIL" value={user.officeEmail} />
            <Field label="MONTHLY INCOME" value={`₦${user.monthlyIncome}`} />
            <Field label="LOAN REPAYMENT" value={`₦${user.loanRepayment}`} />
          </div>
        </section>

        <hr className={styles.hr} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Socials</h2>
          <div className={styles.grid}>
            <Field label="TWITTER" value={user.twitter} />
            <Field label="FACEBOOK" value={user.facebook} />
            <Field label="INSTAGRAM" value={user.instagram} />
          </div>
        </section>

        <hr className={styles.hr} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Guarantor</h2>
          {user.guarantors.map((g, i) => (
            <div key={g.id}>
              <div className={styles.grid}>
                <Field label="FULL NAME" value={g.fullName} />
                <Field label="PHONE NUMBER" value={g.phoneNumber} />
                <Field label="EMAIL ADDRESS" value={g.email} />
                <Field label="RELATIONSHIP" value={g.relationship} />
              </div>
              {i < user.guarantors.length - 1 && <hr className={styles.hr} />}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
