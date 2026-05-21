"use client";
import React from "react";
import styles from "./passwordInput.module.scss";

interface PasswordInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibilitiy = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.passwordWrapper}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className={styles.passwordInput}
        value={value}
        onChange={onChange}
      />

      <button type="button" onClick={togglePasswordVisibilitiy}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
