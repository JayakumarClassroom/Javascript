<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JavaScript function to get the amount of days in a year</title>
</head>
<body>
<script>
	function days_of_a_year(year) 
	{
		 
		return isLeapYear(year) ? 366 : 365;
	}

	function isLeapYear(year) {
			 return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
	}

	document.write(days_of_a_year(2018));
	document.write("<br />");
	document.write(days_of_a_year(2016));

</script>
</body>
</html>
