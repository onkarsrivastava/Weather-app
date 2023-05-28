const API_KEY = 'e194d56abef2c5834d195d13f76cfdaf'
    //const apiurl = "https: //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&q=mumbai";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getweather = async(city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    console.log(response);
    console.log(data);
    return showweather(data);

}
const showweather = (data) => {
    weather.innerHTML = `<div><img src="" alt=""></div>
    <h2>${data.main.temp}°C </h2>
    <h4>${data.weather[0].main}</h4>
</div>`

}

form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value);
        event.preventDefault();
    }
)