function CurrentWeather({ weather }) {

if(!weather || !weather.weather) return null

return (

<div className="current-weather">

<h2>{weather.name}</h2>

<img
src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
alt="weather"
/>

<h1>{Math.round(weather.main.temp)}°</h1>

<p>{weather.weather[0].description}</p>

</div>

)

}

export default CurrentWeather