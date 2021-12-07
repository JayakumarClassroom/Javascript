<script type="text/javascript">
    var quizques = 3;
    var quiz1 = prompt("Web Development Language [Quiestion " + quizques + " ]");

    quizques -= 1; //quizques=quizques-1;
    var quiz2 = prompt("Script language is [Quiestion " + quizques + " ]");

    quizques -= 1;
    var quiz3 = prompt("Style sheet language is [Quiestion " + quizques + " ]");

    var marks = 0;

    if (quiz1.toLowerCase() === "html" && quiz2.toLowerCase() === "js" && quiz3.toLowerCase() === "css") {
        marks += 3;
        document.write("Congrats! you got Gold Medal. your score is 3");
    } else if ((quiz1.toLowerCase() === "html" || quiz2.toLowerCase() === "js") && quiz3.toLowerCase() === "css") {
        marks += 2;
        document.write("Congrats! you got silver+ Medal. your score is 2");
    } else if ((quiz1.toLowerCase() === "html" || quiz3.toLowerCase() === "css") && quiz2.toLowerCase() === "js") {
        marks += 2;
        document.write("Congrats! you got silver Medal. your score is 2");
    } else if (quiz1.toLowerCase() === "html" || quiz2.toLowerCase() === "js" || quiz3.toLowerCase() === "css") {
        marks += 1;
        document.write("Congrats! you got bronze Medal. your score is 1");
    } else {
        document.write("Study Hard");
    }
</script>