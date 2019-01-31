//JavaScript for index.html

document.addEventListener("DOMContentLoaded", function(e) {
	
	//Listeners respond to button clicks to change the theme and reset input
	
	changeTheme("metal", "url(https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_1280.jpg)", "rgba(61, 0, 0, 0.5)", "New Rocker,cursive", "#ffffff");
	
	changeTheme("elegant", "url(https://images.unsplash.com/photo-1467165048326-5848fb9c0913)", "rgba(253, 210, 249, 0.5)", "Great Vibes,cursive", "#990422");
	
	document.getElementById("inReset").addEventListener("click", function (e) {
		clearInfo("outFirst1");
		clearInfo("outFirst2");
		clearInfo("outLast");
		clearInfo("outDate");
		clearInfo("outLocation");
	});

	//Listeners track keyup entry into input fields to populate output fields
	appendInfo("inFirst1", "outFirst1");
	appendInfo("inFirst2", "outFirst2");
	appendInfo("inLast", "outLast");
	appendDate("inDate", "outDate");
	appendInfo("inLocation", "outLocation");
	

	function changeTheme(theme, url, rgba, font, color) {
		document.getElementById(theme).addEventListener("click", function (e) {
			document.getElementById("outDetails").style.backgroundImage = url;
			document.getElementById("infoArea").style.backgroundColor = rgba;
			document.getElementById("infoArea").style.fontFamily = font;
			document.getElementById("infoArea").style.color = color;
		})
	}

	function clearInfo(field) {
		document.getElementById("infoArea").style.visibility = "hidden";
		document.getElementById(field).innerText = " ";
	}

	function appendInfo(input, output) {
		document.getElementById(input).addEventListener("keyup", function (e) {
			document.getElementById("infoArea").style.visibility = "visible";
			document.getElementById(output).innerText = document.getElementById(input).value;
		})
	}

	function appendDate(input, output) {
		document.getElementById(input).addEventListener("keyup", function (e) {
			document.getElementById("infoArea").style.visibility = "visible";

			var myDate = new Date(document.getElementById(input).value);
			var myYear = myDate.getFullYear();
			var myMonth = monthName(myDate);
			var myDay31 = myDate.getDate()+1;
			var myDay = dayName(myDate);

			newDate = myDay + ", " + myMonth + " " + myDay31 + "th, " + myYear;
			document.getElementById(output).innerText = newDate;
			
			function monthName(date) {
				var monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				return monthList[date.getMonth()];
			}

			function dayName(day) {
				var dayList = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
				return dayList[day.getDay()+1];
			}
		})
	}
})