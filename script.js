// Add link from weather API to call information 
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Marietta&units=metric&APPID=40e532b573b9b839043237397439fa01",
function(data) {
    console.log(data);
// Calls to the weather image
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

// Gives the exact temperature without decimal values
var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;

// Calls to the index file to show the weather icon and information on the DOM
    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
}

);