import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const GetAllTasks = async (props) => {
  console.log("hddd");
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      tasks.push(doc.data);
    });
    props.setTaskList([...tasks]);
  } catch (e) {
    alert("error");
  }
};

export default GetAllTasks;
