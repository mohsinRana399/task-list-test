import { makeStyles } from "@mui/styles";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
interface InputProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}
const useStyles = makeStyles((theme?: any) => ({
  inputForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    justifyContent: "space-between",
  },

  "@media (max-width: 640px)": {
    inputForm: {
      width: "80%",
    },
  },
}));
const InputForm: React.FC<InputProps> = ({ task, setTask, handleAddTask }) => {
  const classes = useStyles();

  return (
    <form className={classes.inputForm} onSubmit={handleAddTask}>
      <TextField
        id="outlined-basic"
        label="Task"
        variant="outlined"
        placeholder="create a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="success" type="submit">
        Add
      </Button>
    </form>
  );
};

export default InputForm;
