import { useState } from "react";
import Button from "../components/Button";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name</label>
        <input
          type="email"
          placeholder="Your email.."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="password"
          placeholder="Your last name.."
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button isButton={true} type="submit" content="Register" />
      </form>
    </section>
  );
};

export default Register;
