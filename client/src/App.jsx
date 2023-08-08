import { useState } from "react";
import "./App.css";
import Story from "./components/Story";

const text = "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona."

function App() {
  return (
    <div>
      <Story text={text}/>
    </div>
  );
}

export default App;
