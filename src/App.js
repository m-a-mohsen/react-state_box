import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;

  const [isActive, setIsActive] = useState(true)
  const [isActiveText, setIsActiveText] = useState('Activate')
  
  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    // console.log(isActive);
    setIsActive(!isActive)
    setIsActiveText(!isActive?'Activate' : 'Deactivate')

  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActiveText}</button>
    </main>
  );
}
