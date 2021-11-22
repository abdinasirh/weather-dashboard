

var apiKey = "a2c9303f1d7e4e010eb8c74634ac29bf";



// var inputValue = document.querySelector("#input-value");
var searchBtn = document.querySelector("#search-btn");
var cityNameEl = document.querySelector("#city-name");
var currentDateEl = document.querySelector("#current-date");
var weatherIconEl = document.querySelector("#weather-icon");
var tempEl = document.querySelector("#temperature");
var humidityEl = document.querySelector("#humidity");
var WindSpeedEl = document.querySelector("#wind-speed");
var uvIndexEl = document.querySelector("#UV-index");
var cardRowEl = document.querySelector("#card-row");
var currentWeather = document.querySelector("#current-weather");
var currentCity = document.querySelector("#current-city");







function getCityWeather(){
    let inputValue=$("#input-value").val()  
      console.log(inputValue)
    
    
        // var apir = "https://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=" + apiKey;
        var apir = "https://api.openweathermap.org/data/2.5/weather?q=" +inputValue+ "&units=imperial&appid=" + apiKey;
        console.log(apir)
        
        fetch(apir).then(function(response){
            if (response.ok){
                return response.json()
            } 
        })

        .then(function(data){
            // console.log("data ", data)

            // var h1El = document.createElement("h3");
            // h1El.textContent=data.name;
            // currentCity.appendChild(h1El);
            currentCity.textContent=data.name;

            var currentDate = moment().format('MMMM Do YYYY');
            currentDateEl.textContent = currentDate;

            var iconSRC = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherIconEl.setAttribute("src", iconSRC);

            tempEl.textContent= "temp: " + data.main.temp +" f"







            fiveDay(inputValue)
            // displayWeather(data)

            
        })
        

      
    }

    function fiveDay(cityInput){

        var fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial&appid=" + apiKey;

        fetch(fiveDayApi).then(function(response){
            if (response.ok){
                return response.json()
            } 
        })

        .then(function(data){
            console.log("data ", data)

            for (let i = 0; i < 5; i++) {
                console.log(data.list[i].main.temp);

                var card = document.createElement("div");
                card.setAttribute("class", "card");
                //card body
                //give it content
                //append the content to the card body
                //apend the card body to the card 

                //append the card to your 5 day forecast html element
                
            }


            
        })
        
    }
    // getCityWeather();

//     function displayWeather(data){

//         currentWeather.innerHTML=""
//         currentCity.innerHTML = response.name;
//         currentWeather.appendChild(currentCity);




//     }
    
        


    searchBtn.addEventListener("click",getCityWeather )












