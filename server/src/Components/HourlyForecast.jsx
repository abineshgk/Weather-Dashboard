function HourlyForecast({forecast}){

const hourly = forecast.list.slice(0,8);

return(

<div className="hourly">

<h3>Hourly Forecast</h3>

<div className="hourly-container">

{hourly.map((item,index)=>(
<div className="hour-card" key={index}>

<p>{item.dt_txt.split(" ")[1].slice(0,5)}</p>

<img
src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
alt=""
/>

<p>{Math.round(item.main.temp)}°</p>

</div>
))}

</div>

</div>

)

}

export default HourlyForecast