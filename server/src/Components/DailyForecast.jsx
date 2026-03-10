function DailyForecast({forecast}){

const daily = forecast.list.filter(item =>
item.dt_txt.includes("12:00:00")
);

return(

<div className="daily">

<h3>5-Day Forecast</h3>

{daily.map((day,index)=>(
<div className="day-card" key={index}>

<p>{new Date(day.dt_txt).toLocaleDateString()}</p>

<img
src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
alt=""
/>

<p>{Math.round(day.main.temp)}°</p>

</div>
))}

</div>

)

}

export default DailyForecast