import React, {useEffect, useState} from "react";
import axios from 'axios';

// import React from "react";
import "./App.css";

function App() {
  const [imageOfTheDay, setImageOfTheDay ] = useState({});
  
  useEffect(()=>{
    const fetchImage = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=NKXoAGvvT65UPclVawwiGRMSJFtrzTkNlon2lSce`)
      .then(res => {
        setImageOfTheDay(res.data)
      })
      .catch(err => {
        
      })
    }
    fetchImage()
},[])
  return (
    <div className="App">
      <h1>Today's Photo</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <img src = {imageOfTheDay.url}></img>
      </p>
    </div>
  );
}

export default App;