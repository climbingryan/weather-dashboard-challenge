
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
        var icon = response.list[0].weather[0].icon;
        var iconTwo = response.list[6].weather[0].icon;
        var iconThree = response.list[14].weather[0].icon;
        var iconFour = response.list[22].weather[0].icon;
        var iconFive = response.list[30].weather[0].icon;
        var iconEl = document.getElementById("icon-one");
        var iconTwoEl = document.getElementById("icon-two");
        var iconThreeEl = document.getElementById("icon-three");
        var iconFourEl = document.getElementById("icon-four");
        var iconFiveEl = document.getElementById("icon-five");
        iconFunction = function() {
            if (icon === "01n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (icon === "01d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (icon === "02d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (icon === "02n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (icon === "03d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (icon === "03n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (icon === "04d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (icon === "04n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (icon === "09d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (icon === "09n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (icon === "10d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (icon === "10n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (icon === "11d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (icon === "11n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (icon === "13d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (icon === "13n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (icon === "50d") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (icon === "50n") {
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            }
        }
        iconTwoFunction = function() {
            if (iconTwo === "01n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (iconTwo === "01d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (iconTwo === "02d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (iconTwo === "02n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (iconTwo === "03d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (iconTwo === "03n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (iconTwo === "04d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (iconTwo === "04n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (iconTwo === "09d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (iconTwo === "09n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (iconTwo === "10d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (iconTwo === "10n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (iconTwo === "11d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (iconTwo === "11n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (iconTwo === "13d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (iconTwo === "13n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (iconTwo === "50d") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (iconTwo === "50n") {
                iconTwoEl.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            }
        }           
        iconThreeFunction = function() {
            if (iconThree === "01n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (iconThree === "01d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (iconThree === "02d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (iconThree === "02n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (iconThree === "03d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (iconThree === "03n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (iconThree === "04d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (iconThree === "04n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (iconThree === "09d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (iconThree === "09n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (iconThree === "10d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (iconThree === "10n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (iconThree === "11d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (iconThree === "11n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (iconThree === "13d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (iconThree === "13n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (iconThree === "50d") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (iconThree === "50n") {
                iconThreeEl.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            } 
        }
        iconFourFunction = function() {
            if (iconFour === "01n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (iconFour === "01d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (iconFour === "02d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (iconFour === "02n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (iconFour === "03d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (iconFour === "03n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (iconFour === "04d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (iconFour === "04n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (iconFour === "09d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (iconFour === "09n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (iconFour === "10d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (iconFour === "10n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (iconFour === "11d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (iconFour === "11n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (iconFour === "13d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (iconFour === "13n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (iconFour === "50d") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (iconFour === "50n") {
                iconFourEl.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            }
        }
        iconFiveFunction = function() {
            if (iconFive === "01n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (iconFive === "01d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (iconFive === "02d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (iconFive === "02n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (iconFive === "03d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (iconFive === "03n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (iconFive === "04d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (iconFive === "04n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (iconFive === "09d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (iconFive === "09n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (iconFive === "10d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (iconFive === "10n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (iconFive === "11d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (iconFive === "11n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (iconFive === "13d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (iconFive === "13n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (iconFive === "50d") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (iconFive === "50n") {
                iconFiveEl.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            }
        }

        iconFunction();
        iconTwoFunction();
        iconThreeFunction();
        iconFourFunction();
        iconFiveFunction();
        
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
            humEl.textContent = "humidity: " + hum + "%";    
                //day 2
            var hum = response.list[6].main.humidity;
            var humEl = document.getElementById("card-humid-two");
            humEl.textContent = "humidity: " + hum + "%";  
                //day 3
            var hum = response.list[14].main.humidity;
            var humEl = document.getElementById("card-humid-three");
            humEl.textContent = "humidity: " + hum + "%";                  
                //day 4
            var hum = response.list[22].main.humidity;
            var humEl = document.getElementById("card-humid-four");
            humEl.textContent = "humidity: " + hum + "%";                  
                //day 5
            var hum = response.list[30].main.humidity;
            var humEl = document.getElementById("card-humid-five");
            humEl.textContent = "humidity: " + hum + "%";  
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