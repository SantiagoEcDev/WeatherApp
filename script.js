
      const apiKey = "3efc23ad1fabee9f2f8bbc6240ab4586";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchButton = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");
      const errorMessage = document.querySelector(".error");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          errorMessage.style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          errorMessage.style.display = "none";
        }

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
          case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
          case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
          case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
          case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
          case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        }

        document.querySelector(".weather").style.display = "block";
      }

      searchButton.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });