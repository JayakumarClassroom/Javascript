<!-- Math Random number between user given numbers-->
<script type="text/javascript">
    var userNumber1 = prompt("Enter a value");
    var Numbers1 = parseInt(userNumber1);

    var userNumber2 = prompt("Enter a value");
    var Numbers2 = parseInt(userNumber2);

    var randomNumber = Math.floor(Math.random() * (Numbers2 - Numbers1 + 1)) + Numbers1;


    var message = "<h3>" + randomNumber + ' is a number between ' + Numbers1 + ' to ' + Numbers2;
    document.write(message);
</script>