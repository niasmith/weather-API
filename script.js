var city = "New York";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid=40e532b573b9b839043237397439fa01",
function(data) {
    console.log(data);
// Calls to the weather image
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

// Calls to temperature
var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;

// Calls to the index file to show the weather icon and information on the DOM
    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
}

);