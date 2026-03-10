import { useState, useEffect } from "react"
import "./index.css"

import SearchBar from "./Components/SearchBar"
import CurrentWeather from "./Components/CurrentWeather"
import HourlyForecast from "./Components/HourlyForecast"
import DailyForecast from "./Components/DailyForecast"
import WeatherDetails from "./Components/WeatherDetails"

import { getWeather, getForecast } from "./Services/WeatherApi"

const API_KEY = "91ad8445eb75977be10467b91fb8d343"

function App(){

const [weather,setWeather] = useState(null)
const [forecast,setForecast] = useState(null)

const handleSearch = async(city)=>{

try{

const weatherData = await getWeather(city)
const forecastData = await getForecast(city)

if(weatherData.cod !== 200){
alert("City not found")
return
}

setWeather(weatherData)
setForecast(forecastData)

}catch(error){
console.log(error)
}

}

/* Auto location detection */

useEffect(()=>{

navigator.geolocation.getCurrentPosition(async(position)=>{

try{

const lat = position.coords.latitude
const lon = position.coords.longitude

const weatherRes = await fetch(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
)

const forecastRes = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
)

const weatherData = await weatherRes.json()
const forecastData = await forecastRes.json()

setWeather(weatherData)
setForecast(forecastData)

}catch(error){

console.log("Location weather error:",error)

}

})

},[])

return(

<div className="dashboard">

<div className="top-bar">
<SearchBar onSearch={handleSearch}/>
</div>

{weather && forecast && forecast.list && (

<div className="grid-layout">

<div className="card large">
<CurrentWeather weather={weather}/>
</div>

<div className="card">
<HourlyForecast forecast={forecast}/>
</div>

<div className="card">
<DailyForecast forecast={forecast}/>
</div>

<div className="card">
<WeatherDetails weather={weather}/>
</div>

</div>

)}

</div>

)

}

export default App