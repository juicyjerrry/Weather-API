var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var UV = document.querySelector("#index");

var lat = document.querySelector()

var userInput = document.querySelector

// var t = ;
// var w = ;
// var h = ;
// var UVindex = ;

temp.textContent = "Temperature: " + t + " °F"
wind.textContent = "Wind: " + w + " MPH"
humidity.textContent = "Humidity: " + h + "%"
UV.textContent = "UV Index: " + UVindex

//💾 api goes here
//confused on how to translate user input to lat/long
var getRepoIssues = function (repo) {
    var latLongURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + 'userinput' + '&limit=5&appid=7f40902288d0d134017e794484869282';

    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + 'lat' + '&lon=' + 'lon' + '&exclude=hourly,daily&appid=7f40902288d0d134017e794484869282';

    fetch(latLongURL).then
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR")
    };

    fetch(apiUrl).then
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
}; 

