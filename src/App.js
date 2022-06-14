import React from "react";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Helpline from "./components/Helpline";
import Employee from "./components/Employee";
import Count from "./components/Count";


function App() {
  return (
    <div>
      <Header />
      <Admin />
      <Helpline />
      <Employee />
      <Count />
      
    </div>
  );
}

export default App;
