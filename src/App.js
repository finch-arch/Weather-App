import React, { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
    const [data,setData] = useState({})
    const [location , setLocation] = useState('')
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f2374e93eeb755f7baa2b838ad6f0c5e`
   
   const searchLocation=(event) =>{
      if (event.key === 'Enter') {
         axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data)
         })        
      }
    }
  return (
    <div className="app">
      <div className="search">
        <input
         value = {location}
         onChange = {event=>setLocation(event.target.value)}
         placeholder='  Enter location'
         onKeyPress = {searchLocation}
         type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
        </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
