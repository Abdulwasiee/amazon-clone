import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Carouser from "./components/Carouse/Carouser";
import Catagory from "./components/Catagory/Catagory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carouser />
      <Catagory/>
    </>
  );
}

export default App;
