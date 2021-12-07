<script type="text/javascript">
    var userNumber = prompt("Enter a value");
    var Numbers = parseInt(userNumber);
    var randomNumber = Math.floor(Math.random() * Numbers) + 1;
    var message = "<h3>" + randomNumber + ' is a number between 1 to ' + Numbers;
    document.write(message);
</script>