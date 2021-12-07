<script type="text/javascript">
var guesscorrect=false;
var randomNumber=prompt("Enter a value");
var number=Math.floor(Math.random()*6)+1;
if (parseInt(randomNumber)===number){
	guesscorrect=true;
}
if(guesscorrect){
	document.write("You Guessed Correctly!!! wow");
}
else{
	document.write('oops, better luch next time. The number is '+number);
}



</script>