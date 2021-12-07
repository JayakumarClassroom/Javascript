<!DOCTYPE html>
<html>

<body>

    <p id="array1"> </p>
    <p id="array2"> </p>
    <p id="array3"> </p>
    <p id="demo" style="color:red;"></p>
    <button onclick="viewArrary()">List Array</button>
    <button onclick="myFunction()">Join</button>


    <script>
        var arr1 = [" Apples", " Oranges"];
        var arr2 = [" Grapes", " Lemon", " Watermelon"];
        var arr3 = [" Papaya"];

        function viewArrary() {
            document.getElementById("array1").innerHTML = "List 1 : " + arr1;
            document.getElementById("array2").innerHTML = "List 2 : " + arr2;
            document.getElementById("array3").innerHTML = "List 3 : " + arr3;
            document.getElementById('demo').innerHTML = "<h4>Click to 'Join' button to combine the Array</h4>"
        }

        function myFunction() {
            var fruits = arr1.concat(arr2, arr3);
            var x = document.getElementById("demo");
            x.innerHTML = fruits;
        }
    </script>
</body>

</html>