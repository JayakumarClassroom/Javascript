<html>
<head>
<title> Arithmatic Operation </title>
<script type="text/javascript">
	var n1,n2,r; 
	function add()
	{ 
		n1=document.myform.n1.value;
		n2=document.myform.n2.value; 
		n1=parseFloat(n1);
		n2=parseFloat(n2);
		r=n1+n2;
		document.myform.result.value=r; 
	}
	function sub()
	{
		n1=document.myform.n1.value; 
		n2=document.myform.n2.value;
		n1=parseFloat(n1);
		n2=parseFloat(n2);
		r=n1-n2;
		document.myform.result.value=r;
	}
	function mul()
	{
		n1=document.myform.n1.value;
		n2=document.myform.n2.value;
		n1=parseFloat(n1);
		n2=parseFloat(n2);
		r=n1*n2;
		document.myform.result.value=r;
	}
	function divide()
	{
		n1=document.myform.n1.value;
		n2=document.myform.n2.value;
		n1=parseFloat(n1);
		n2=parseFloat(n2);
		r=n1/n2;
		document.myform.result.value=r;
	}
</script> 
</head>
<body>
<form name="myform">
<h1 align="center"> Arithmatic Operations</h1>
<hr color="red">
<center>
	<u>Enter a number in each text box </u>
	<br><br>
	Number 1:<input type="text" name="n1" value="">
	<br><br> 
	Number 2:<input type="text" name="n2" value="">
	<br><br>
	<input type="button" value="Add" onClick="add()">
	<input type="button" value="Subtract" onClick="sub()">
	<input type="button" value="Multiply" onClick="mul()" >
	<input type="button" value="Divide" onClick="divide()">
	<br><br>
	<font color="red">Result is:
	<input type="text" name="result" value=""></center>
</font>
</form>
</body>
</html>