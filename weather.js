    const weather = document.querySelector('.weather');
    const API_KEY = 'bf2e4b1ab4bffb99ddc2d8ad88ebb7b9';
    const COORDS = 'coords';

    function getWeather(lat, lng){
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      ).then(function(response){
        return response.json();

      }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
      });
    }

    function saveCoords(coordsObj){
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }

    function handleGeoSucces(position){
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordsObj = {
        // latitude: latitude;
        // longitude: longitude;
        latitude,
        longitude
      };
      saveCoords(coordsObj);
      getWeather(latitude, longitude);
    }

    function handleGeoError(){
      console.log('can not access geo location');
    }

    function askForCoords(){
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    }

    function loadCoords(){
      const loadedCoords = localStorage.getItem(COORDS);
      if(loadedCoords === null){
        askForCoords();
      }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
      }
    }

    function init(){
      loadCoords();
    }
    init();
