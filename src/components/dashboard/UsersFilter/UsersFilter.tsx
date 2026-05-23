"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./UsersFilter.module.scss";

const initial = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: "",
};

export default function UsersFilter() {
  const [values, setValues] = useState(initial);

  const handle =
    (key: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleReset = () => setValues(initial);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.filter} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Organization</span>
        <div className={styles.selectWrap}>
          <select value={values.organization} onChange={handle("organization")}>
            <option value="">Select</option>
          </select>
          <MdKeyboardArrowDown className={styles.caret} size={16} />
        </div>
      </label>

      <label className={styles.field}>
        <span>Username</span>
        <input
          type="text"
          placeholder="User"
          value={values.username}
          onChange={handle("username")}
        />
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handle("email")}
        />
      </label>

      <label className={styles.field}>
        <span>Date</span>
        <input
          type="date"
          placeholder="Date"
          value={values.date}
          onChange={handle("date")}
        />
      </label>

      <label className={styles.field}>
        <span>Phone Number</span>
        <input
          type="text"
          placeholder="Phone Number"
          value={values.phoneNumber}
          onChange={handle("phoneNumber")}
        />
      </label>

      <label className={styles.field}>
        <span>Status</span>
        <div className={styles.selectWrap}>
          <select value={values.status} onChange={handle("status")}>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
          <MdKeyboardArrowDown className={styles.caret} size={16} />
        </div>
      </label>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="submit" className={styles.filterBtn}>
          Filter
        </button>
      </div>
    </form>
  );
}
