import { Link } from "react-router-dom";
import styles from "../styles/button.module.css";

const Button = (props) => {
  if (props.isButton) {
    return (
      <button
        className={styles.submit}
        type={props.type}
        onClick={props.onClick}>
        {props.content}
      </button>
    );
  } else {
    return (
      <Link to={props.to} className={styles.button}>
        {props.content}
      </Link>
    );
  }
};

export default Button;
