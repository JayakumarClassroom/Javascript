<!DOCTYPE html>
<html>

<head>
</head>
<meta charset="utf-8">

<body>
    <h2 id='heading'>Javscript - Events onmouseover and onmouseout</h2>

    <button onmouseout="clearDate()" onmouseover="showDate()"> Show Date</button>
    <h1 id='time'></h1>
    <script>
        function showDate() {
            var time = document.getElementById('time');
            time.innerHTML = Date();
        }

        function clearDate() {
            var time = document.getElementById('time');
            time.innerHTML = '';
        }
    </script>


</body>

</html>