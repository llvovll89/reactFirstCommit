import Button from "./button.module.css";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [Keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Call the Api");
  }, []);
  useEffect(() => {
    if (Keyword !== "" && Keyword.length > 5) {
      console.log("SEARCH FOR", Keyword);
    }
  }, [Keyword]);
  return (
    <div>
      <input
        value={Keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styled.title}>{counter}</h1>
      <button onClick={onClick} className={Button.btn}>
        Click me
      </button>
    </div>
  );
}

export default App;
