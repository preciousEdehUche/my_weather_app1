function formattedTime(timestamp) {
  
let currentTime = new Date(timestamp);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let date = currentTime.getDate();

let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

return ` ${day} ${date}, ${hour}:${minutes} `;
}
function currentTemp (response) {
  celsuisTemperature = Math.round(response.data.main.temp);
 document.querySelector(".temp").innerHTML = celsuisTemperature 
 document.querySelector("#Humidity").innerHTML = response.data.main.humidity; 
 document.querySelector("#Wind").innerHTML = Math.round(response.data.wind.speed); 
 document.querySelector("#description").innerHTML = response.data.weather[0].description; 
 document.querySelector("#time").innerHTML =formattedTime(response.data.dt*1000); 
 let iconElement = document.querySelector("#icon");
 iconElement.setAttribute("src" ,  `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`) 
console.log(response.data.weather[0].icon)
 
}

function map(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enterCity");
  let place = document.querySelector(".location");
  place.innerHTML = searchInput.value;
let city = searchInput.value;
let apiKey = "b99ee1eacb9208b8278c9be72e3dcc37";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(currentTemp);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", map);

function displayCelsuis(event) {
  event.preventDefault();
  celsuis.classList.add("active")
  fahrenhit.classList.remove("active")
  let degreeTemp = document.querySelector(".temp");
  degreeTemp.innerHTML = Math.round(celsuisTemperature);
}

let celsuis = document.querySelector("#celsuis");
celsuis.addEventListener("click", displayCelsuis);

function displayFahrenhit(event) {
  event.preventDefault();
  celsuis.classList.remove("active")
  fahrenhit.classList.add("active")
  let degreeTemp = document.querySelector(".temp");
  let fahrenhitTemp = (celsuisTemperature * 9/5) + 32;
  degreeTemp.innerHTML = Math.round(fahrenhitTemp);
}

let fahrenhit = document.querySelector("#fahrenhit");
fahrenhit.addEventListener("click", displayFahrenhit);

let celsuisTemperature = null



function weatherForeCast() {
let days = ["Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

let forecastHtml ="";

days.forEach (function  (day) {
  forecastHtml = forecastHtml +
  `<div class="weather-forecast">
  <div class="weather-forecast-day">${day}</div>
    <div class="weather-forecast-icon">🌦️</div>
    <div><span id="weather-forecast-max">27°</span> 
      <span id="weather-forecast-min">21°</span> </div>
  </div>`;
});

 let foreCastDay = document.querySelector("#bottom-page");
  foreCastDay.innerHTML = forecastHtml;
};

weatherForeCast();

// function currentPosition(position) {
  //  let lat =position.coords.latitude;
  //  let lon = position.coords.longitude; 
  
  //  let place = document.querySelector(".location");
  //  place.innerHTML = `The lat & long of your current location are ${lat} , ${lon} respectively `;
  // }

// navigator.geolocation.getCurrentPosition(currentPosition);
// let currentLat = document.querySelector("#current");
// currentLat.addEventListener("click",currentPosition);