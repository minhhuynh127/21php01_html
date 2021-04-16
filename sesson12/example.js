var myArr = ["Nam", "Nguyen", "Huy"];
console.log(myArr);
console.log(myArr.length);
console.log(myArr[0]);


// In mảng trên ra mảng hình như sau:
//-1. Nam
//-2. Nguyen
//-3. Huy
for(var i = 0; i < myArr.length; i++)
{

	document.write(i+1 + ". " + myArr[i] + "</br");

}

var arr = [1, 4, 2, 5, 8, 2, 11, 55, 5, 115];
//Sắp xếp mamgr theo thứ tự tăng dần và in ra màn hình
//in ra mang hình số lớn nhất
//Số lơn nhất nhân vs sô nhỏ nhát
var sort;
for(var i = 0; i < arr.length; i++) {
	for(var j = i + 1; j < arr.length; j++) {
		if(arr[i] > arr[j]){
			sort = arr[i];
			arr[i] = arr[j];
			arr[j] = sort;
		}
	}
}
document.write(" Sắp xếp tăng dần là : ");

for(i = 0; i < arr.length; i++){
	document.write(arr[i] + "&ensp;");
}
var numberMax = 0;
for(var i = 0; i < arr.length; i++){
	if(arr[i] > numberMax){
		numberMax = arr[i];
	}
}
document.write("</br>");
document.write(" Số lớn nhất là " + numberMax);

var arr = [
			['Nam', 1998, 'nam@yahoo.com', '0985888555'],
			['Huong', 2000, 'huong@yahoo.com', '0923123654'],
			['Huy', 2001, 'huy@yahoo.com', '0905555888'],
];
//In ra danh sách trên
//1- Nam - 1998 - nam@yahoo.com - 0985888555
//-----------------------------------------
//-----------------------------------------
