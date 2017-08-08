$(document).ready(function(){
  $("#submitdata").click(function(){
    var city = $("#cityname").val();
        getInfo(city);
  });
});

function getInfo(city){
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=metric' + '&apikey=80095304f5c4cc6b98182028b4ed3044')
    .then(function(response){
      console.log(response);
      let cityinput = response.data.name;
      console.log(cityinput);
      let output = '';
        output += `
              <div class="col-md-12 content">
                <div class="well col-md-4">
                  <h1>City Name </h1>
                  <h2>${response.data.name}</h2>
                  <h1>Country Code </h1>
                  <h2>${response.data.sys.country}</h2>
                </div>
                <div class="well col-md-4">
                    <h1>Temperature </h1>
                    <h2>${response.data.main.temp} °C</h2>
                    <h1>Humidity </h1>
                    <h2>${response.data.main.humidity}%</h2>
                    <h1>Temperature Max</h1>
                    <h2>${response.data.main.temp_max} °C</h2>
                    <h1>Temperature Min</h1>
                    <h2>${response.data.main.temp_min} °C</h2>
                </div>
                <div class="well col-md-4">
                    <h1>Description</h1>
                    <h2>${response.data.weather["0"].description}</h2>
                    <h1>Current weather</h1>
                    <h2>${response.data.weather["0"].main}</h2>
                </div>
        `;
        $('#weatherInfo').html(output);
    })
    .catch(function(err){
      console.log(err);
    });
}
