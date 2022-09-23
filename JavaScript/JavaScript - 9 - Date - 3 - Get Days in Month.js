<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get days in Month</title>
</head>
<body>
<script>
	var getDaysInMonth = function(month,year) {
	
	 return new Date(year, month, 0).getDate();
	// Here January is 0 based
	// return new Date(year, month+1, 0).getDate();
	// 0 - Declared for Month Adjesutment
	};
	document.write(getDaysInMonth(1, 2022));
	document.write("<br/>");
	document.write(getDaysInMonth(14, 2022));
	document.write("<br/>");
	document.write(getDaysInMonth(9, 2022));
	document.write("<br/>");
	document.write(getDaysInMonth(24, 2022));

</script>
</body>
</html>
