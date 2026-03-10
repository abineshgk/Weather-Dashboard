const API_KEY = "91ad8445eb75977be10467b91fb8d343";

export const getWeather = async (city) => {

const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

const data = await res.json();

return data;

};

export const getForecast = async (city) => {

const res = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
);

const data = await res.json();

return data;

};