

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
// var cardRowEl = document.querySelector("#card-row");
var currentWeather = document.querySelector("#current-weather");
var currentCity = document.querySelector("#current-city");
var forecastEl = document.querySelector("#card-row");








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

            var currentDate = moment().format("M/D/YYYY");
            currentDateEl.textContent = currentDate;

            var iconSRC = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherIconEl.setAttribute("src", iconSRC);

            tempEl.textContent= "Temp: " + data.main.temp +" °F";
            humidityEl.textContent= "Humidity: " + data.main.humidity + "%";
            WindSpeedEl.textContent= "Wind: " + data.wind.speed + " mph";
          

            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var uvIndexUrl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&cnt=1";


            uvIndex(uvIndexUrl)

     
            fiveDay(inputValue)
            // displayWeather(data)            
        })

    }

    function uvIndex(uvIndexUrl){
        fetch(uvIndexUrl).then(function(response){
            if (response.ok){
                return response.json()
            } 
        })
        .then(function(data){
                console.log("uv call: ", data[0].value)
                uvIndexEl.textContent= "uvindex: " + data[0].value;
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

            for (let i = 0; i < 40; i+= 8) {
                console.log(data.list[i].main.temp);
                // console.log([i]);

                var card = document.createElement("div");
                card.setAttribute("class", "card");
                
                var forecastDate = document.createElement("h5")
              
                forecastDate.textContent = data.list[i].dt_txt.split(" ")[0];
                forecastDate.classList = "card-header text-center"
                card.appendChild(forecastDate);
                
                forecastEl.appendChild(card);

                var weatherIcon = document.createElement("img");
                card.appendChild(weatherIcon);

                weatherIcon.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");  

                var fiveDayTemp = document.createElement('p');
                fiveDayTemp.textContent = 'Temp: ' + data.list[i].main.temp +" °F";
                card.appendChild(fiveDayTemp);

                var fiveDayHum = document.createElement('p');
                fiveDayHum.textContent = 'Humidity: ' + data.list[i].main.humidity + "%";
                card.appendChild(fiveDayHum);

                var fiveDayWind = document.createElement('p');
                fiveDayWind.textContent = 'Wind: ' + data.list[i].wind.speed + " mph";
                card.appendChild(fiveDayWind);

                
               

        
              
                


                
                
            }


            
        })
        
    }

    searchBtn.addEventListener("click",getCityWeather )












