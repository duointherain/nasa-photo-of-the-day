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
       Our world is bigger than we're used to. There is endless space. Explore!  <span role="img" aria-label='go!'>🚀</span>!
        <img src = {imageOfTheDay.url}></img>
      </p>
    </div>
  );
}

export default App;