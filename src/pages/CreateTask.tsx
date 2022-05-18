import React, { useState } from "react";

import "./temp.css";
import InputForm from "../components/InputForm";
import { useNavigate } from "react-router-dom";
import { addTaskToStorage } from "../utils/helperFunctions";
import { makeStyles } from "@mui/styles";

interface CreateTasksProps {}

const useStyles = makeStyles((theme?: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "5%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 0,
    fontFamily: "Roboto",
  },

  "@media (max-width: 640px)": {
    container: {
      width: "100%",
    },
  },
}));

const CreateTasks: React.FC<CreateTasksProps> = () => {
  const classes = useStyles();

  const [task, setTask] = useState<string>("");

  const navigate = useNavigate();

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task !== "") {
      addTaskToStorage(task);
      setTask("");
      navigate("/list-tasks");
    } else {
      alert("Task can not be empty");
    }
  };
  return (
    <div className={classes.container}>
      <p className={classes.heading}> Create Task</p>
      <InputForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </div>
  );
};

export default CreateTasks;
