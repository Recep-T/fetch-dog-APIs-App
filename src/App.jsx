import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [image, setImage] = useState(null);
  const [input, setInput] = useState();
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, [input]);
  const fetchData = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <h1>Welcome to Dog World</h1>
      <div>
        <img src={image} alt="" width="400px" /> <br />
        <input onChange={fetchData} />
      </div>
    </div>
  );
}
