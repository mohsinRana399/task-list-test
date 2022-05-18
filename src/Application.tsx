import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTasks from "./pages/CreateTask";
import Home from "./pages/Home";
import ListTasks from "./pages/ListTasks";

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list-tasks" element={<ListTasks />}></Route>
        <Route path="/create-tasks" element={<CreateTasks />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
