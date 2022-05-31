import { useState, useEffect } from "react";
import DisplayCard from "./components/DisplayCard.jsx";
import "./App.css";

function App() {
  const [intialData, setInitialData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const mapData = () =>
    intialData?.map((user, index) => (
      <DisplayCard userData={user} key={index} />
    ));
  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await response.json();
      res.forEach((ele) => {
        ele.image = `https://avatars.dicebear.com/v2/avataaars/${ele.username}.svg?options[mood][]=happy`;
      });

      setInitialData(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="card-container">{mapData()}</div>
    </div>
  );
}

export default App;
