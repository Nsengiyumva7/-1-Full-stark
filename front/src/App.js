import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import RegistrationForm from "./components/registrationForm";

function App() {
  //connecting to the server
  const [backendData, setBackendData] = useState([]);
  //fetch
  const fetchData = async () => {
    await fetch("/student")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //post
  

  return (
    <div className="App">
      <Header />
      <RegistrationForm backendData={backendData} />
    </div>
  );
}

export default App;
