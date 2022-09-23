<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>yesterday day</title>
</head>

<body>
	<script>
		var yesterday = function (date1) {
			var dt = new Date(date1);
			return new Date((dt.setDate(dt.getDate() - 1))).toString();
		}
		document.write(yesterday('feb 25, 2023'));
		document.write("<br />");
		document.write(yesterday('mar 17, 2023'));

	</script>
</body>

</html>