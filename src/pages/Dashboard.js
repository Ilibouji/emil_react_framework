import Button from "../components/Button";
import styles from "../styles/dashboard.module.css";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const Dashboard = (props) => {
  const [taskList, setTaskList] = useState([]);
  const { user } = UserAuth();
  const userEmail = user.email;

  useEffect(() => {
    const getAllTasks = async () => {
      const tasks = [];

      const q = query(
        collection(db, "tasks"),
        where("users", "array-contains", "mymail@gmail.com")
      );

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
        setTaskList(tasks);
      } catch (e) {
        alert("error");
      }
    };
    getAllTasks();
  }, []);

  return (
    <section className={styles.landing}>
      <section className={styles.content}>
        <h1>Dashboard</h1>
        <p id="content">Look at all these tasks!</p>
        {taskList.map((task) => {
          return (
            <div className={styles.singleTask} key={task.id}>
              <h2>Taak: {task.title}</h2>
              <p>Deelnemers: {task.users}</p>
              <p>Aantal deelnemers: {task.rangeValue}</p>
              <p>Eind Datum: {task.date}</p>
            </div>
          );
        })}
        <h2>
          <Button
            isButton={false}
            to="/create-task"
            content="Cmooon add a task!"
          />
        </h2>
      </section>
    </section>
  );
};

export default Dashboard;
