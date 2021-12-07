<html>

<body>
    <script type="text/javascript">
        var day = new Date().getDay();
        switch (day) {
            case 0:
                x = "Today is Sunday";
                break;
            case 1:
                x = "Today is Monday";
                break;
            case 2:
                x = "Today is Tuesday";
                break;
            case 3:
                x = "Today is Wednesday";
                break;
            case 4:
                x = "Today is Thursday";
                break;
            case 5:
                x = "Today is Friday";
                break;
            case 6:
                x = "Today it's Saturday";
                break;
        }
        document.write("<h3>" + x + "</h3>");
    </script>
</body>

</html>