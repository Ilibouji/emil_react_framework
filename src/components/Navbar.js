import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import styles from "../styles/navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ul className={styles.navbar}>
      <li>
        <Link to="/account">account</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Button isButton={false} to="/register" content="Register" />
      </li>

      {!user ? (
        <li>
          <Button isButton={false} to="/login" content="Login" />
        </li>
      ) : (
        <li>
          <Button
            isButton={true}
            type="button"
            content="Logout"
            onClick={handleLogout}
          />
        </li>
      )}
    </ul>
  );
};

export default Navbar;
