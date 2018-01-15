function c(clear) {
	
	document.getElementById("display").value = clear;
	 
	 }

function math(math) {	

	document.getElementById("display").value +=  math;
	 
	 }

function e(equal) {

	try	{

		c(eval(document.getElementById("display").value))

	 }

	catch(e) {

		c("error")
		
		 }
		 
	 }
