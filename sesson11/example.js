var myString = "Comes out just when you need it to Á I paced back and forth all this time";
//Chiều dài của 1 chuỗi
var lengString = 0;
lengString = myString.length;
console.log(lengString);
//Kiểm tra giá trị của kí tự trong chuỗi
var positionO = 0;
positionO = myString.indexOf('o');
console.log(positionO);

var positionZ = 0;
positionZ = myString.indexOf('z');
console.log(positionZ);

var positionOLast = 0;
positionOLast = myString.lastIndexOf('o');
console.log(positionOLast);
//Cắt chuỗi trong chuỗi
var myCutString = "";
myCutString = myString.substring(4,9);
console.log(myCutString);
//cắt từ vị trí vs độ dài bao nhiêu
var myCutString2 = "";
myCutString2 = myString.substr(4, 9); //~myString.substring (4, 13);
console.log(myCutString2);
//Thay the chuỗi = chuỗi
var newString = "";
newString = myString.replace("out" , "in");
console.log(newString);
//Chuyển thành chữ hoa hoặc chữu thường toàn bộ chuỗi
var upperString = "";
var lowerString = "";
upperString = myString.toUpperCase();
lowerString = myString.toLowerCase();


//Ví dụ
console.log("Ví dụ");
var username = "Huynh Cong Minh";
var surname = "";
var cushion = "";
var name = "";

var firstSpace = username.indexOf(' ');
surname = username.substring(0, firstSpace);
document.write("</br>");
document.write(surname);

var lastSpace = username.lastIndexOf(' ');
name = username.substring(lastSpace, username.length);
document.write("</br>");
document.write(name);

cushion = username.substring(firstSpace,lastSpace);
document.write("</br>");
document.write(cushion);

var newName = "";
newName = username.replace("Minh" , "21PHP01");
document.write("</br>");
document.write(newName);

// var countN = 0;
// countN = username.indexOf('n');
// document.write("</br>");
// document.write(countN);
var countN = 0;
var finChar = 'n';
var positionChar = 0;
//Chuyển chuỗi kí tự về 1 kiều hoa hoặc thường
username = username.toUpperCase();
finChar = finChar.toLowerCase();
//Kết thúc chuyển
//Trong khi còn tìm thấy kí tự cần tìm trong chuỗi thì tiếp tục
while(username.indexOf(finChar) > -1){
//Vị trí cửa kí tự tìm đc
	positionChar = username.indexOf(finChar);
	//Chuyển đổi chuỗi cũ bằng chuỗi mới bằng cách  láy phần tử kí tự tìm đc đến cuối chuỗi
	username = username.substring(positionChar + 1, username.length);
	//Tăng lần đếm lên 1
	countN++;
}
document.write("</br> So ki tu " + finChar + " trong ten la: ");
document.write(countN);