import { UserAuth } from "../context/AuthContext";
import styles from "../styles/home.module.css";

const Account = (props) => {
  const { user } = UserAuth();
  return (
    <section className={styles.landing}>
      <section className={styles.content}>
        <h1>Account</h1>
        <p>User Email: {user && user.email}</p>
      </section>
    </section>
  );
};

export default Account;
