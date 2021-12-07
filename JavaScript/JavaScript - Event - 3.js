<!DOCTYPE html>
<html>
<head>
</head>
<meta charset="utf-8">
<body>
	<h2>Javscript - Events</h2>

	<script>
		function changeText(id){

			id.innerHTML='You Clicked the button';
		}
	</script>

	<button onclick="changeText(this)"> click Me</button>
</body>
</html>