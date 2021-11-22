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
var currentWeather = document.querySelector("#current-weather-container");
var currentCity = document.querySelector("#current-city");





function gitCityWeather(){
    let inputValue=$("#input-value").val()  
      console.log(inputValue)
    
    
        var apir = "https://api.openweathermap.org/data/2.5/weather?q=" +inputValue+ "&appid=" + apiKey;
        console.log(apir)
        
        fetch(apir).then(function(response){
            if (response.ok){
                return response.json()
            } 
        })
        .then(function(data){
            console.log("data ", data)
            displayWeather(data)

            
        })
        

      
    }

    function displayWeather(data){

        currentWeather.innerHTML=""
        currentCity.innerHTML = response.data.name;




    }
    
        


    searchBtn.addEventListener("click",displayWeather )












