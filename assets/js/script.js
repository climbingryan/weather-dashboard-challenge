
var weatherFunction = function() {

    var cityInput = document.getElementById("cityIn").value;
    cityInput = localStorage.getItem("city");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&daily.dt&appid=abb013d2d528fa0ed28972b8e1a2ae76')
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        console.log(response);
                // CHICAGO
            document.getElementById("chicago").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "chicago");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // AUSTIN
            document.getElementById("austin").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "austin");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // ORLANDO
            document.getElementById("orlando").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "orlando");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // SEATTLE
            document.getElementById("seattle").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "seattle");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // DENVER
            document.getElementById("denver").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "denver");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // ATLANTA
            document.getElementById("atlanta").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "atlanta");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // New York
            document.getElementById("new-york").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "new york");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
                // san-francisco
            document.getElementById("san-francisco").addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", "san francisco");
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });

            // wind speed
        var windSpeed = response.wind.speed;
        var windSpeedEl = document.getElementById("wind-speed");
        windSpeedEl.textContent = "Wind-Index: " + windSpeed + " MPH";
        
            // temperature
        var temperature = response.main.temp;
        var tempEl = document.getElementById("temperature");
        tempEl.textContent = "Temperature " + temperature + " F";

            // humidity
        var humidity = response.main.humidity;
        var humidEl = document.getElementById("humidity");
        humidEl.textContent = "Humidity: " + humidity + "%";
    })

    var cityInput = document.getElementById("cityIn").value;
    cityInput = localStorage.getItem("city");

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=abb013d2d528fa0ed28972b8e1a2ae76')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);

        // dates
        var dates = function() {
                // day 1
        var dateWhole = response.list[0].dt_txt.split(" ");
        var date = dateWhole[0];
        var dateTitle = document.getElementById("day");
        dateTitle.textContent = date;
            // day 2
        var dateWholeTwo = response.list[6].dt_txt.split(" ");
        var dateTwo = dateWholeTwo[0];
        var dateTitleTwo = document.getElementById("day-two");
        dateTitleTwo.textContent = dateTwo;
            // day 3
        var dateWholeThree = response.list[14].dt_txt.split(" ");
        var dateThree = dateWholeThree[0];
        var dateTitleThree = document.getElementById("day-three");
        dateTitleThree.textContent = dateThree;
            // day 4
        var dateWholeFour = response.list[22].dt_txt.split(" ");
        var dateFour = dateWholeFour[0];
        var dateTitleFour = document.getElementById("day-four");
        dateTitleFour.textContent = dateFour;
            // day 5
        var dateWholeFive = response.list[30].dt_txt.split(" ");
        var dateFive = dateWholeFive[0];
        var dateTitleFive = document.getElementById("day-five");
        dateTitleFive.textContent = dateFive;
        } 
        dates();

        // if else for emoji's

        //temp
        var temp = function() {
                // day 1
        var temperature = response.list[0].main.temp;
        var tempEl = document.getElementById("card-temp");
        tempEl.textContent = "Temp: " + temperature + "F";
            // day 2
        var temperature = response.list[6].main.temp;
        var tempEl = document.getElementById("card-temp-two");
        tempEl.textContent = "Temp: " + temperature + "F";
            // day 3
        var temperature = response.list[14].main.temp;
        var tempEl = document.getElementById("card-temp-three");
        tempEl.textContent = "Temp: " + temperature + "F";
            // day 4
        var temperature = response.list[18].main.temp;
        var tempEl = document.getElementById("card-temp-four");
        tempEl.textContent = "Temp: " + temperature + "F";
            // day 5
        var temperature = response.list[30].main.temp;
        var tempEl = document.getElementById("card-temp-five");
        tempEl.textContent = "Temp: " + temperature + "F";
        }
        temp();
        //humidity
        var humidity = function() {
                //day 1
            var hum = response.list[0].main.humidity;
            var humEl = document.getElementById("card-humid");
            humEl.textContent = hum;    
                //day 2
            var hum = response.list[6].main.humidity;
            var humEl = document.getElementById("card-humid-two");
            humEl.textContent = hum; 
                //day 3
            var hum = response.list[14].main.humidity;
            var humEl = document.getElementById("card-humid-three");
            humEl.textContent = hum;                 
                //day 4
            var hum = response.list[22].main.humidity;
            var humEl = document.getElementById("card-humid-four");
            humEl.textContent = hum;                 
                //day 5
            var hum = response.list[30].main.humidity;
            var humEl = document.getElementById("card-humid-five");
            humEl.textContent = hum; 
        }
        humidity();
    });
}    





weatherFunction();


// document.querySelector("#cityIn").value

/* var buttonCities = function(city) {
            document.getElementById(city).addEventListener("click", function() {
                inputVal = document.getElementById("cityIn");
                inputVal.setAttribute("value", city);
                localStorage.setItem("city", inputVal.value);
                console.log(inputVal);
            });
        } */