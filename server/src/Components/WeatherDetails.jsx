function WeatherDetails({weather}){

return(

<div className="details">

<div className="card">
<p>Humidity</p>
<h3>{weather.main.humidity}%</h3>
</div>

<div className="card">
<p>Wind</p>
<h3>{weather.wind.speed} m/s</h3>
</div>

<div className="card">
<p>Pressure</p>
<h3>{weather.main.pressure}</h3>
</div>

</div>

)

}

export default WeatherDetails