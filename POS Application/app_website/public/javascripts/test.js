function validateProductName()
{
	var x = document.getElementById("productname").value;
	var re = /^[A-Za-z]+$/;
	
		if(!x.match(re))
				{
			document.getElementById("productname").focus();
			document.getElementById('productname').value = "";
			var text="*productname should contains only alphapets";
		        }
		else
			{
			var text="";
		        }
		document.getElementById("id1").innerHTML = text;

}
function checkProductCode() {
	var val=document.getElementById("productCode").value;
	var pattern = /^[3-8]{1}[0-9]{11}$/;
	if (val.match(pattern)) {
		var lastDigit = val % 10;
		var firstElevenDigits = Math.floor(val / 10);
		var twoToElevenDigits = firstElevenDigits % Math.pow(10, 10);
		var numList = [];
		for (var i = 0; twoToElevenDigits > 0; i++) {

			numList[i] = twoToElevenDigits % 10;
			twoToElevenDigits = Math.floor(twoToElevenDigits / 10);

		}
		var sum = 0;
		for (var j = 0; j < numList.length; j++) {
			sum = sum + numList[j];
		}
		if (sum >= 10) {
			var sum0 = sum % 10;
			var sum1 = Math.floor(sum / 10);
			sum = sum0 + sum1;
		}
		if (sum == lastDigit) {
		} else {
			document.getElementById("ProductCodeError").innerHTML = "* Invalid BarCode";
			count = count + 1;

		}
	} else {
		document.getElementById("ProductCodeError").innerHTML = "* length mustbe 12 digits and must start with 3-8 range";
		count = count + 1;

	}

}
function validatePrice() {
	var val=document.getElementById("productprice").value;
	var pattern = /^[0-9]+(\.[0-9]{1,2})?$/;
	if (!val.match(pattern))
	{
		document.getElementById("productprice").focus();
    	document.getElementById('productprice').value = "";
    	var text="*enter valid decimal value";
	} 
	else
	{
		var text="";

	}
	 document.getElementById("PriceError").innerHTML = text;
	}

function taxvalidation()
{
	var price=document.getElementById("productprice");
	var val=price.value;
	var e=document.getElementById("producttype");
	var type=e.options[e.selectedIndex].value;
	
	if(type == "foods")
	{	
		tax=val/10;
		}
	if(type == "confectionary")
	{	
		tax=val/10;
		}

	else if(type == "Householditems")
		{
		tax=val/5;
		}
	else if(type == "cosmetics")
		{
		tax=val/18;
		}
	else if(type == "books")
		{
		tax=val/5;
		}
	document.getElementById("val").value = tax;

}
  

  

