import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../styles/register.module.css";
import styles from "../styles/home.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);
  const defaultUserAmount = 10;
  const [rangeValue, setRangeValue] = useState(defaultUserAmount);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        title: title,
        date: date,
        users: users,
        rangeValue: rangeValue,
      });
      navigate("/dashboard");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section className={styles.landing}>
      <section className={styles.content}>
        <h1>Create a task!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="tname">Name of task</label>
          <input
            type="text"
            placeholder="Title of goal"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="gDate">Goal date</label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />

          <label htmlFor="addUser">Add users to this task</label>
          <input
            type="text"
            placeholder="Example: user1@gmail.com, user2@gmail.com..."
            onChange={(e) => setUsers(e.target.value.split(","))}
          />

          <label htmlFor="confirmRange">
            Amount of people that need to confirm the task
          </label>
          <input
            type="range"
            min="1"
            max="10"
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <p>{rangeValue} users</p>

          <Button isButton={true} type="submit" content="Create Task" />
        </form>
      </section>
    </section>
  );
};

export default CreateTask;
