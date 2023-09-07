let currentTime = new Date();

let time = document.querySelector(".time");

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

time.innerHTML = ` ${day} ${date}, ${hour}:${minutes} `;

function currentTemp (response) {
 document.querySelector(".temp").innerHTML = Math.round(response.data.main.temp); 
 console.log(response.data)
 document.querySelector("#Humidity").innerHTML = response.data.main.humidity; 
 document.querySelector("#Wind").innerHTML = Math.round(response.data.wind.speed); 
 document.querySelector("#description").innerHTML = response.data.weather[0].description; 
 

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

function temp(event) {
  event.preventDefault();
  let degreeTemp = document.querySelector(".temp");
  degreeTemp.innerHTML = "19";
}

let celsuis = document.querySelector(".celsuis");

celsuis.addEventListener("click", temp);

function tempTwo(event) {
  event.preventDefault();
  let degreeTemp = document.querySelector(".temp");
  degreeTemp.innerHTML = "66";
}

let fahrenhit = document.querySelector(".fahrenhit");

fahrenhit.addEventListener("click", tempTwo);



// function currentPosition(position) {
  //  let lat =position.coords.latitude;
  //  let lon = position.coords.longitude; 
  
  //  let place = document.querySelector(".location");
  //  place.innerHTML = `The lat & long of your current location are ${lat} , ${lon} respectively `;
  // }

// navigator.geolocation.getCurrentPosition(currentPosition);
// let currentLat = document.querySelector("#current");
// currentLat.addEventListener("click",currentPosition);