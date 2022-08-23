var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var UV = document.querySelector("#index");
var searchButton = document.querySelector("#searchButton")
var cityName = document.querySelector("#cityName")

var searchHistory1 = document.querySelector("searchHistory1")
var searchHistory2 = document.querySelector("searchHistory2")
var searchHistory3 = document.querySelector("searchHistory3")
var searchHistory4 = document.querySelector("searchHistory4")
var searchHistory5 = document.querySelector("searchHistory5")
var searchHistory6 = document.querySelector("searchHistory6")
var searchHistory7 = document.querySelector("searchHistory7")
var searchHistory8 = document.querySelector("searchHistory8")


var forcast = document.querySelector("#forcast")

var userInput = document.querySelector("#citySearch")

const lat = localStorage.getItem('lat')
const lon = localStorage.getItem('lon')


var t = "";
var w = "";
var h = "";
// var UVindex = ;
// UV.textContent = "UV Index: " + UVindex

//
searchButton.addEventListener("click", function(){
    var citySearch = userInput.value
    oneCallApi(citySearch);
    twoCallApi(lat, lon);
})

//💾 api goes here

var twoCallApi = function(lat, lon) {
    var twoCallApi = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=de124d2c270fb53cf6dfdf88be98ad15";
    fetch(twoCallApi).then(function(response) {
        return response.json();
    })
}

// function saveHistory() {

// }

var oneCallApi = function(citynamehere) {
    console.log(citynamehere);
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + (citynamehere) + '&appid=de124d2c270fb53cf6dfdf88be98ad15&units=imperial';
        fetch(apiUrl).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.wind.speed);
        console.log(data.main.humidity);
        t = data.main.temp;
        w = data.wind.speed;
        h = data.main.humidity;
        temp.textContent = "Temperature: " + t + " °F";
        wind.textContent = "Wind: " + w + " MPH";
        humidity.textContent = "Humidity: " + h + "%";
        console.log(cityName);
        var dateString = moment.unix(data.dt).format("MM/DD/YYYY");        
        cityName.textContent = data.name + " " + dateString;

        let exampleElement = document.createElement("")
        exampleElement.textContent = "hello"
        forcast.appendChild(exampleElement)

        localStorage.setItem('lat' , data.coord.lat)
        localStorage.setItem('lon' , data.coord.lon)
        localStorage.setItem('Most Recent Search' , data.name)

    })

}
// ==================================

// var getCoordinates = function(cityName) {
//     var latLongURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=de124d2c270fb53cf6dfdf88be98ad15';

//     fetch(latLongURL).then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//         console.log(data[0].lat)
//         console.log(data[0].lon)
//         console.log(data[0].name)
//         oneCallApi(data[0].lat, (data[0].lon))
//         cityNames.textContent = oneCallAPI(data[0].name)
//     })
// }; 

// var oneCallApi = function(lat, lon) {
//     console.log(lat)
//     console.log(lon)
//     var apiUrl = 'http://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely,alerts&appid=de124d2c270fb53cf6dfdf88be98ad15';
//     fetch(apiUrl).then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }

