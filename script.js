var city = document.getElementById('inp');
var btn = document.getElementById('btn');




btn.addEventListener('click',function(){
    
   let cityName = document.getElementById('inp').value;
   console.log(cityName);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +cityName +"&appid=076d6e5af79a3625c2afe90aab1cc5be")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        let tempInC = data.main.temp - 273;
        tempInC = Math.round(tempInC);
        document.getElementsByClassName('city')[0].innerHTML = "Weather in " + cityName;
        document.getElementsByClassName('temp')[0].innerHTML = `${tempInC} °C`;
        document.getElementsByClassName('icon')[0].src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        document.getElementsByClassName('description')[0].innerHTML = data.weather[0].main;
        document.getElementsByClassName('humidity')[0].innerHTML = data.main.humidity + "%";
        document.getElementsByClassName('wind')[0].innerHTML = data.wind.speed + "km/h";
    });

    
})
