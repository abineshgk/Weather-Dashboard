import {
Line
} from "react-chartjs-2"

import {
Chart as ChartJS,
LineElement,
PointElement,
CategoryScale,
LinearScale
} from "chart.js"

ChartJS.register(
LineElement,
PointElement,
CategoryScale,
LinearScale
)

function TemperatureChart({forecast}){

const temps = forecast.list.slice(0,8)

const data = {
labels: temps.map(item => item.dt_txt.split(" ")[1].slice(0,5)),

datasets:[
{
label:"Temperature °C",
data: temps.map(item => item.main.temp),

borderColor:"#ffffff",
backgroundColor:"rgba(255,255,255,0.3)",
tension:0.4
}
]
}

return(
<div className="chart">
<h3>Temperature Trend</h3>
<Line data={data}/>
</div>
)

}

export default TemperatureChart