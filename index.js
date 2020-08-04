
// This is our API key
var APIKey = "40e532b573b9b839043237397439fa01";

// Here we are building the URL we need to query the database
var queryURL = "https://home.openweathermap.org/data/2.5/weather?q=" + APIKey;


$("#search").click(function(e) {
  var weather = $(#city).va;();
  console.log(weather);
})


// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
      console.log(queryURL);
      console.log(response);

    // Transfer Content to HTML using jQuery
    // console.log your data response

    
  });
