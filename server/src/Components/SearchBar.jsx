import { useState } from "react"
import { FaSearch } from "react-icons/fa"

function SearchBar({ onSearch }) {

const [city,setCity] = useState("")

const handleSearch = () => {
if(city.trim() !== ""){
onSearch(city)
}
}

return(

<div className="search-container">

<div className="search-bar-modern">

<FaSearch className="search-icon"/>

<input
type="text"
placeholder="Search city (e.g. Chennai, London)"
value={city}
onChange={(e)=>setCity(e.target.value)}
onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
/>

<button onClick={handleSearch}>
Search
</button>

</div>

</div>

)

}

export default SearchBar