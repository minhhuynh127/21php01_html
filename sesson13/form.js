function checkValue() {
	var inputs = document.getElementsByTagName('input');
	var usernaem = inputs[0].value;
	var firstNumber = inputs[1].value;
	var lastNumber = inputs[2].value;
	var gender = "";
	var birthDay = inputs[5].value;
	var firstDay = inputs[6].value;
	var lastDay = inputs[7].value;
	if(inputs[3].checked) {
		gender = "Male";
	}else{
		gender = "Female";
	}
	if(usernaem == ""){
		document.getElementById('errow-name').innerHTML = 'Không được để trống';
		document.getElementById('name').style.borderColor = 'red';	
	}else{
		document.getElementById('errow-name').innerHTML = "";
		document.getElementById('name').style.borderColor = 'green';
		  }
	if(firstNumber == ""){
		document.getElementById('errow-firstnumber').innerHTML = 'Không được để trống';
		document.getElementById('firstnumber').style.borderColor = 'red';
	}else{
		document.getElementById('errow-firstnumber').innerHTML = "";
		document.getElementById('firstnumber').style.borderColor = 'green';
		}
	if (lastNumber == ""){
		document.getElementById('errow-lastnumber').innerHTML = 'Không được để trống';
		document.getElementById('lastnumber').style.borderColor = 'red';
	}else{
		document.getElementById('errow-lastnumber').innerHTML = "";
		document.getElementById('lastnumber').style.borderColor = 'green';
		}
	if(birthDay == ""){
		document.getElementById('errow-birthday').innerHTML = 'Không được để trống';
		document.getElementById('birthday').style.borderColor = 'red';
	}else{
		document.getElementById('errow-birthday').innerHTML = "";
		document.getElementById('birthday').style.borderColor = 'green';
		}
	if(firstDay == ""){
		document.getElementById('errow-firstday').innerHTML = 'Không được để trống';
		document.getElementById('firstday').style.borderColor = 'red';
	}else{
		document.getElementById('errow-firstday').innerHTML = "";
		document.getElementById('firstday').style.borderColor = 'green';
		}
	if(lastDay == ""){
		document.getElementById('errow-lastday').innerHTML = 'Không được để trống';
		document.getElementById('lastday').style.borderColor = 'red';
	}else{
		document.getElementById('errow-lastday').innerHTML = "";
		document.getElementById('lastday').style.borderColor = 'green';
		}
	firstNumber = parseInt(firstNumber);
	lastNumber = parseInt(lastNumber);
	if((firstNumber > lastNumber) || (firstNumber < 0) || (firstDay > lastDay)){
		alert('Bạn đã nhập sai');
	}
// Tính tiền điện: 50 số đầu giá 1000 VND/số, 100 số tiếp theo 2000 VND/số, từ 200 số trở lên sẽ tính giá 3500 VND/số
	var money;
	var number1 = parseInt(number1);
	if(inputs[1].value <= 50){
		number1 = 1000;
		money = number1 * inputs[1].value;
	}
	if ((inputs[1].value > 50) && (inputs[1].value <= 150)) {
		number1 = 2000;
		money = number1 * inputs[1].value;
	}
	if(inputs[1].value >= 200){
		number1 = 3500 ;
		money = number1 * inputs[1].value;
	}

//In hóa đơn
var invoice;
	if(usernaem && gender && firstNumber && lastNumber && birthDay && firstDay && lastDay && money) {
		invoice += "<h3>Hóa đơn tiền điện</h3>";
		invoice += "Họ và tên:&nbsp; " + usernaem + "</br>";
	 	invoice += "Giới tinh:&nbsp;" + gender + "</br>";
		invoice += "Số đầu kì:&nbsp; " + firstNumber + "</br>";
		invoice += "Số cuối kì:&nbsp; " + lastNumber + "</br>";
		invoice += "Ngày sinh:&nbsp; " + birthDay + "</br>";
		invoice += "Ngày đầu kì:&nbsp; " + firstDay + "</br>";
		invoice += "Ngày cuối kì:&nbsp; " + lastDay + "</br>";
		invoice += "Giá tiền điện:&nbsp; " + money + "</br>";
		if(gender == "Male") {
			document.getElementById('bill').innerHTML = '</br>' + invoice;
			document.getElementById('bill').style.backgroundColor = 'green';
			document.getElementById('bill').style.display = 'block';
		}else{
			document.getElementById('bill').innerHTML = '</br>' + invoice;
			document.getElementById('bill').style.backgroundColor = '#DF01A5';
			document.getElementById('bill').style.display = 'block';
		}
	}
}