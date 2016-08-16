$("document").ready(function(){
	$("getWeather").click(function(){
		getWeather();
	});
	fetchLocation();
})





function setBackground(bg){

	switch(bg) {
		case 'Clear': $('body').css('background-image', 'url("http://7-themes.com/data_images/out/56/6961067-beach-scenes-wallpaper.jpg")')
				  break;

		case 'Rain': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2016/04/Rain-Nature-Wallpaper-HD-Desktop.jpg")')
				  break;

		case 'Drizzle': $('body').css('background-image', 'url("http://webneel.com/wallpaper/sites/default/files/images/04-2013/349840-1920x1200_4.jpg")')
				  break;

		case 'Clouds': $('body').css('background-image', 'url("http://www.pixelstalk.net/wp-content/uploads/2014/12/Poppy-field-flower-background-620x388.jpg")')
				  break;

		case 'Thunderstorm': $('body').css('background-image', 'url("http://hqwallbase.online/images/big/thunderstorm-1561804.jpg")')
				  break;

		case 'Snow': $('body').css('background-image', 'url("http://www.cnmuqi.com/data/out/185/wallpaper-snow-7826190.jpg")')
				  break;

		case 'Mist': $('body').css('background-image', 'url("http://eskipaper.com/images/lake-mist-wallpapers-1.jpg")')
				  break;

		case 'Fog': $('body').css('background-image', 'url("http://feelgrafix.com/data_images/out/7/804705-fog-wallpapers.jpg")')
				  break;

		case 'Haze': $('body').css('background-image', 'url("http://www.wallpaperup.com/uploads/wallpapers/2012/12/18/25607/big_thumb_ba11a794f33ab8cfd5da08d0f93133ab.jpg")')
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
			console.log(data.city);
			console.log(data.timezone);
		}
	})
}