var apiKey = "a2c9303f1d7e4e010eb8c74634ac29bf";



// var inputValue = $("#input-value");
var searchBtn = document.querySelector("#search-btn");
var cityNameEl = document.querySelector("#city-name");
var currentDateEl = document.querySelector("#current-date");
var weatherIconEl = document.querySelector("#weather-icon");
var tempEl = document.querySelector("#temperature");
var humidityEl = document.querySelector("#humidity");
var WindSpeedEl = document.querySelector("#wind-speed");
var uvIndexEl = document.querySelector("#UV-index");
var cardRowEl = document.querySelector("#card-row");
var currentWeather = document.querySelector(".current-weather");
var currentCity = document.querySelector("#current-city");





function displayWeather(){
    let inputValue=$("#input-value").val()  
      console.log(inputValue)
    
    
        var apir = "https://api.openweathermap.org/data/2.5/weather?q=" +inputValue+ "&appid=" + apiKey;
        console.log(apir)
        
        fetch(apir).then(function(response){
            if (response.ok){
                return response.json()
            } 

            currentCity.text(response.name);
            currentWeather.appendChild(currentCity);

            
        })
        .then(function(data){
            console.log("data ", data)
            // searchedResult(data)

            
        })
        

      
    }

    // function searchedResult(data){

    // }
    
        


    searchBtn.addEventListener("click",displayWeather )












