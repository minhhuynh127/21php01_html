//Khai báo mảng sinh viên và in ra;
var studentList = [
					['Nguyen Ngoc Huy', 25, 'huy@yahoo.com', 'Da Nang'],
					['Huynh Cong Minh', 26, 'minh@yaho.com', 'Ha Noi'],
					['Tran Vam Vu', 23, 'vu@yahoo.com', 'HCM'],
					['Le Van Son', 22, 'som@yahoo.com', 'Binh Duong'],
];
 document.write("<table border = 2");
for(var i = 0; i < studentList.length; i++) {
	 document.write("<tr>");
	for(var j = 0; j < studentList.length; j++) {
		document.write("<td>" + studentList[i][j] + "<td>");
	}
	 document.write("</tr>");
}
document.write("</table>");


//Thêm 2 sinh viên và in ra danh sách sinh viên mới;
studentList.push(["Tran Van Dung" , 21, "dung@yahoo.com", "Quang Nam"], 
				 ["Nguyen Van Nam", 20, "nam@yahoo.com",  "Vung Tau"]);
document.write("<h3>Danh sách sinh viên sau khi thêm 2 sinh viên</h3>");
document.write("<table border = 2");
for(var i = 0; i < studentList.length; i++) {
	document.write("<tr>");
	for(var j = 0; j < studentList[i].length; j++) {
		 document.write("<td>" + studentList[i][j] + "<td>");
	}
	 document.write("</tr>");
}
document.write("</table>");


//Đổi tên học viên Huy thành Hùng và in ra danh sach lốp;
document.write("<h3>Danh sách sinh viên sau khi thêm đổi tên</h3>");
studentList[0][0] = "Nguyen Ngoc Huy";
var newName = studentList[0][0].replace('Huy','Hung');
	studentList[0][0] = newName;
 document.write("<table border = 2");
for(var i = 0; i < studentList.length; i++) {
	document.write("<tr>");
	for(var j = 0; j < studentList[i].length; j++) {
		document.write("<td>" + studentList[i][j] + "<td>");
	}
	 document.write("</tr>");
}
 document.write("</table>");
