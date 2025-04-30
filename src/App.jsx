// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import SignUp from "./components/signup/Signup";
import HomePage from "./components/homepage/Homepage";
import { useState } from "react";
import ToDoPage from "./components/todo/todos";
import InProgressPage from "./components/Inprogress/inprogress";
import OnHold from "./components/OnHold/onhold";
import Completed from "./components/Completed/completed";
import { use } from "react";

function App() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [fullName,setFullName] = useState("");
  const [holdTasks, setHoldTasks] = useState(["oops ", "dbms part 2", "SAP business program "]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle function to open and close sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setFullName={Login}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/in-progress" element={<InProgressPage />} />
        <Route path="/hold" element={<OnHold holdTasks={holdTasks} setHoldTasks={setHoldTasks} />} />
        <Route path="/completed" element={<Completed completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;