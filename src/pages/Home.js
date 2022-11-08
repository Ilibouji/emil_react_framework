import { Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/home.module.css";

const Home = (props) => {
  return (
    <section className={styles.landing}>
      <section className={styles.content}>
        <h1>Home</h1>
        <p>
          Glad to have you on our site! Get started making and viewing tasks my
          logging in on signing up!
        </p>
        <h2>
          <Button isButton={false} to="/register" content="Sign up!" />
        </h2>
      </section>
    </section>
  );
};

export default Home;
