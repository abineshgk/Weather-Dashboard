function SunCycle({weather}){

const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString()

return(

<div className="sun-cycle">

<h3>Sun Cycle</h3>

<div className="sun-row">

<div>
🌅
<p>{sunrise}</p>
</div>

<div>
🌇
<p>{sunset}</p>
</div>

</div>

</div>

)

}

export default SunCycle