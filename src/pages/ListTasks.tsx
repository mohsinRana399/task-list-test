import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { Task } from "../model";
import Button from "@mui/material/Button";
import {
  deleteTaskFromStorage,
  getListFromStorage,
} from "../utils/helperFunctions";
import "./temp.css";
import { useNavigate } from "react-router-dom";
interface ListTasksProps {}

const useStyles = makeStyles((theme?: any) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    width: "100%",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 0,
    fontFamily: "Roboto",
  },
  "@media (max-width: 640px)": {
    card: {
      width: "90%",
    },
  },
}));
const ListTasks: React.FunctionComponent<ListTasksProps> = () => {
  const classes = useStyles();
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getListFromStorage(setAllTasks);
  }, []);

  return (
    <div className={classes.listContainer}>
      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={() => navigate("/create-tasks")}>
          Add Task
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            deleteTaskFromStorage(setAllTasks);
          }}
        >
          Delete Selected Tasks
        </Button>
      </div>

      {allTasks.length === 0 ? (
        <h1 className={classes.heading}>No tasks in the list</h1>
      ) : (
        <>
          {allTasks.map((e) => (
            <TaskCard task={e} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTasks;
