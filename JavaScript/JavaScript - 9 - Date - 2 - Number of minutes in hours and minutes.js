<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>number of minutes in hours and minutes.</title>
</head>

<body>
	<script>
		function timeConvert(n) {
			var num = n;
			var hours = (num / 60);
			var rhours = Math.floor(hours);
			var minutes = (hours - rhours) * 60;
			var rminutes = Math.round(minutes);
			return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
		}

		document.write(timeConvert(60022));
	// document.write(timeConvert(22));

	</script>

</body>

</html>