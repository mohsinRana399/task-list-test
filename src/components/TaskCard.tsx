import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Task } from "../model";
import { modifyCheckedFlag } from "../utils/helperFunctions";
import { makeStyles } from "@mui/styles";

interface TaskCardProps {
  task: Task;
}

const useStyles = makeStyles((theme?: any) => ({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    border: "1px solid #d3d4d5",
    margin: 5,
    boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`,
    width: "20%",
  },
  taskName: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    fontFamily: "Roboto",
  },

  "@media (max-width: 640px)": {
    cardContainer: {
      width: "80%",
    },
  },
}));
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const classes = useStyles();

  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(task.isChecked);
  }, [task]);
  return (
    <div className={classes.cardContainer}>
      <p className={classes.taskName}>{task.task}</p>
      <Checkbox
        size="small"
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          modifyCheckedFlag(task, e.target.checked);
          setIsChecked(e.target.checked);
        }}
      />
    </div>
  );
};

export default TaskCard;
