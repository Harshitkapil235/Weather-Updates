const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2405d71306msh6b58acedc357f64p11610cjsn622540035a2e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const checkWeather = (city)=>{
	fetch(url + city, options)
	.then(response=>response.json())
	.then(data =>{
		console.log(data)
		document.querySelector(".temp").innerHTML = data.temp + "°C"
		document.querySelector(".max_temp").innerHTML = data.max_temp + "°C"
		document.querySelector(".min_temp").innerHTML = data.min_temp + "°C"
	document.querySelector(".city").innerHTML = city 
	document.querySelector(".humidity").innerHTML = data.humidity + "%"
	document.querySelector(".wind").innerHTML = data.wind_speed + "km/h"
	
	}
	)
	.catch( err => console.error(err));
}

searchBtn.addEventListener('click' , (e)=>{
	e.preventDefault()
	checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  event.preventDefault();
	  checkWeather(searchBox.value);
	}
  });


