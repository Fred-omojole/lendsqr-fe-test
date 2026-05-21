import styles from "./login.module.scss";
import Image from "next/image";

function LoginPage() {
  return (
    <div className={styles.logincontainer}>
      <div className={styles.leftcontainer}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className={styles.rightcontainer}>
        <h1>welcome</h1>
        <p>Enter details to login</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
