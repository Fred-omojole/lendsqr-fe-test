"use client";
import styles from "./login.module.scss";
import Image from "next/image";
import PasswordInput from "@/components/ui/passwordInput/passwordInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted", { email, password });
    router.push("/users");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContainer}>
        <Image
          className={styles.logo}
          src="/image/Group.png"
          alt="Logo"
          width={173}
          height={36}
        />
        <Image
          className={styles.illustration}
          src="/image/illustration.png"
          alt="Illustration"
          width={600}
          height={337}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.formWrapper}>
          <h1 className={styles.heading}>Welcome!</h1>
          <p className={styles.subheading}>Enter details to login.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>
            <button type="submit" className={styles.submitButton}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
