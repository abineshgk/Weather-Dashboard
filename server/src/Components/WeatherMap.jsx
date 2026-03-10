import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function WeatherMap({weather}){

const position = [
weather.coord.lat,
weather.coord.lon
]

return(

<div className="map">

<MapContainer
center={position}
zoom={7}
style={{height:"300px",width:"100%"}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker position={position}>
<Popup>{weather.name}</Popup>
</Marker>

</MapContainer>

</div>

)

}

export default WeatherMap