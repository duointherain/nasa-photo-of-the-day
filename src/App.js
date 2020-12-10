import React, {useEffect, useState} from "react";
import axios from 'axios';
// import theme from './theme';

// import React from "react";
import "./App.css";
import calButton from './assets/calButton.png';
import heartButton from './assets/heartButton.png';
import shareButton from './assets/shareButton.png';
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
       Our world is bigger than we're used to. There is endless space. Explore!  <span role="img" aria-label='go!'>🚀</span>!</p>
      
       <iframe id="mainPic" src = {imageOfTheDay.url}></iframe> 
       
       {/* <img id="mainPic" src = {imageOfTheDay.url}></img> */}
       
        
     <p class="mainText"> 
        <h3>About</h3>
        <p>{imageOfTheDay.title}</p> 
        <p>{imageOfTheDay.date}</p>
        <p>{imageOfTheDay.explanation}</p>
        <h6>copyright @ {imageOfTheDay.copyright}</h6>
      </p>
    <nav>
      <div class="mainButton">
        <img src ={calButton}></img>  
        </div>
       <div class="mainButton"><img src = {heartButton}></img> </div>
       <div class="mainButton"><img src ={shareButton}>
          </img>
       </div>
    </nav>

    </div>
  );
}

export default App;