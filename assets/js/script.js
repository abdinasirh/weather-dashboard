var apiKey = "a2c9303f1d7e4e010eb8c74634ac29bf";



var inputValue = $("#input-value");
var searchBtn = $("#search-btn");
var cityNameEl = $("#city-name");
var currentDateEl = $("#current-date");
var weatherIconEl = $("#weather-icon");
var tempEl = $("#temperature");
var humidityEl = $("#humidity");
var WindSpeedEl = $("#wind-speed");
var uvIndexEl = $("#UV-index");
var cardRowEl = $("#card-row");


searchBtn.on("click", function(){
    // preventDefault();
    if (inputValue.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("you clicked this button")
    // getWeather(searchInput.val());
});










function displayWeather(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=saint%20cloud&appid=a2c9303f1d7e4e010eb8c74634ac29bf";

    fetch(url).then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })

}

displayWeather();





// fetch(apiKey).then(function(response) {
//     // request was successful
//     if (response.ok) {
//       response.json().then(function(data) {
//         displayIssues(data);