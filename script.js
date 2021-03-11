var API_KEY = config.API_KEY
var button = document.getElementById("button-addon2");

button.addEventListener("click", function (event) {
    var statecode = document.getElementById("weatherinput").value
    // prevents page from refreshing so we could see the console
    event.preventDefault();
    var replaced = statecode.split(' ').join('+');
    // search bar input from user
    var addContent = (data) => {
        // to get object
        console.log(data)
        var display = document.getElementById("main")
        display.innerHTML = `Forecast: ${data.weather[0].main}`;

        var cityName = document.getElementById('cityName')
        cityName.innerHTML = `Location: ${data.name}`;

        var temp = document.getElementById('temp')
        var tempInKelv = data.main.temp
        var tempInDeg = Math.round((tempInKelv - 273.15) * (9 / 5) + 32)
        temp.innerHTML = `Temp: ${tempInDeg} \u00B0F`

        var pressure = document.getElementById('pressure')
        pressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;

        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var icon = document.getElementById("icon")
        icon.src = iconurl
        
        var humidity = document.getElementById("humidity")
        humidity.innerHTML = `humidity: ${data.main.humidity} %`;
        
        var wind = document.getElementById("wind")
        wind.innerHTML = `Wind Speed: ${data.wind.speed} MPG`;

        display.style.display = "block";
        
    }
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + replaced + "&appid=" + API_KEY)
    
        // .then(reply => console.log(reply)) used to check status
        .then(reply => reply.json())
        // .then(data => console.log(data)) to get url info
        .then(data => addContent(data))
        // unable to get .catch to work
        .catch(err => console.log(''))
        
});

        







