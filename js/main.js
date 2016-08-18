var latitude,longitude,description,city,country;
var date = new Date();
var hours = date.getHours();




$("document").ready(function(){
	$("getWeather").click(function(){
		getWeather();
	});
	fetchLocation();
})





function setBackground(description){

	switch(description) {
		case 'Clear': $('body').css('background-image', 'url("http://7-themes.com/data_images/out/56/6961067-beach-scenes-wallpaper.jpg")')
				  break;

		case 'Rain': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/04/Backgrounds-HD-rain-wallpaper.jpg")')
				  break;

		case 'Drizzle': $('body').css('background-image', 'url("http://webneel.com/wallpaper/sites/default/files/images/04-2013/349840-1920x1200_4.jpg")')
				  break;

		case 'Clouds': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/05/Summer-Wallpaper-Free-Download.jpg")')
				  break;

		case 'Thunderstorm': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Lightning-Storm-HD-Background-Download.jpg")')
				  break;

		case 'Snow': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Free-Photos-Nature-Winter.jpg")')
				  break;

		case 'Mist': $('body').css('background-image', 'url("http://eskipaper.com/images/lake-mist-wallpapers-1.jpg")')
				  break;

		case 'Fog': $('body').css('background-image', 'url("http://feelgrafix.com/data_images/out/7/804705-fog-wallpapers.jpg")')
				  break;

		case 'Haze': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg")')
				  break;

	}
}

function setIcon(description){
	if(hours < 17)
		switch(description) {
			case 'Clear': $("#icon").html('<i class="wi wi-day-sunny"></i>')
						  break;
			case 'Rain': $("i").addClass("wi wi-day-rain")
						  break;
			case 'Drizzle': $("#icon").html('<i class="wi wi-day-sprinkle"></i>')
						  break;
			case 'Clouds': $("#icon").html('<i class="wi wi-day-cloudy"></i>')
						  break;
			case 'Thunderstorm': $("#icon").html('<i class="wi wi-day-lightning"></i>')
						  break;
			case 'Snow':$("#icon").html('<i class="wi wi-day-snow"></i>')
						  break;
			case 'Mist':$("#icon").html('<i class="wi wi-day-fog"></i>')
						  break;
			case 'Fog':$("#icon").html('<i class="wi wi-day-fog"></i>')
						  break;
			case 'Haze':$("#icon").html('<i class="wi wi-day-haze"></i>')
						  break;
		}
	else
		switch(description) {
			case 'Clear': $("#icon").html('<i class="wi wi-night-clear"></i>')
						  break;
			case 'Rain': $("#icon").html('<i class="wi wi-night-alt-rain"></i>')
						  break;
			case 'Drizzle': $("#icon").html('<i class="wi wi-night-alt-sprinkle"></i>')
						  break;
			case 'Clouds': $("#icon").html('<i class="wi wi-night-alt-cloudy"></i>')
						  break;
			case 'Thunderstorm': $("#icon").html('<i class="wi wi-night-alt-lightning"></i>')
						  break;
			case 'Snow':$("#icon").html('<i class="wi wi-night-alt-snow"></i>')
						  break;
			case 'Mist':$("#icon").html('<i class="wi wi-night-fog"></i>')
						  break;
			case 'Fog':$("#icon").html('<i class="wi wi-night-fog"></i>')
						  break;
			case 'Haze':$("#icon").html('<i class="wi wi-stars"></i>')
						  break;
		}
}

function fetchLocation(){
	$.ajax({
		url: 'http://ip-api.com/json',
		dataType: "json",
		data:{},
		type: "GET",
		success: function(data){
			latitude = data.lat;
			longitude = data.lon;
			city = data.city;
			country = data.country;
			$("#city").html(city);
			fetchWeather();
		}
	})
}

function fetchWeather(){
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=174f9cf2ae710d7e49db0d17c7aa90b6',
		type: "GET",
		dataType: "json",
		data: {},
		success: function(data){
			description = data.weather[0].main;
			setBackground(description);
			$("#temp").html(Math.floor(data.main.temp - 273));
			$("#state").html(description);
			setIcon(description);
		}
	})
}

function kelCel(){

}