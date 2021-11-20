var apiKey = "a2c9303f1d7e4e010eb8c74634ac29bf";
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