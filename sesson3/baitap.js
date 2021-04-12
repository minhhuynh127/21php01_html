//Exercise 1:
var team1 = 12;
var team2 = 0;
	team2 = (team1 * 2) - 4;
document.write(" Bài 1 :");
document.write(" Tổ 2 có " + team2 + " công nhân");
document.write("</br>");


//Exercise 2:
var candy = 0;
var candyshell = 0;
var money = 2000;
var price = 200;
	candy = money / price;
	candyshell = candy;
while (candyshell >= 2) {
	candyshell = candyshell - 2;
	candy++;
	candyshell++;
}
document.write(" Bài 2 :");
document.write(" Số kẹo là " + candy + " cây ");
document.write("</br>");


// Exercise 3:
var bag1 = 18;
var bag2 = 0;
var count = 0;
bag2 = bag1 * 2;
	while (bag2-- > bag1++) {
		count++;
	}
document.write(" Bài 3 :");
document.write(" Phải bỏ " + count + " viên bi để 2 túi bằng nhau ");
document.write("</br>");


//Exercise 4:
var bookBinh = 27;
var bookMinh = 0;
var count = 0;
bookMinh = bookBinh / 3;
while (bookBinh-- > bookMinh++ * 2) {
	count++;
}
document.write(" Bài 4 :");
document.write(" Phải bỏ " + count + " quyển để sách Bình gấp đôi sách Minh ");
document.write("</br>");


//Exercise 5:
var marbleBlue = 0;
var marbleRed = 0;
var marbleBlue = 0;
var marbleRed = 0;
while (((0.4 * marbleBlue) + (0.75 * marbleRed)) == 27) {
	marbleRed + marbleBlue == 50;
	((0.4 * (50 - marbleRed)) + (0.75 * marbleRed)) == 27;
	((-0.4 * marbleRed) + 20 + (0.75 * marbleRed)) == 27;
	((-0.4 * marbleRed) + (0.75 * marbleRed)) == 7;
	(0.35 * marbleRed) == 7;
}
marbleRed = 7 / 0.35;
marbleBlue = 50 - marbleRed;
document.write(" Bài 5 :");
document.write(" Số bi đỏ là " + marbleRed + " viên ");
document.write(" &ensp;&ensp;&ensp;Số bi xanh là " + marbleBlue + " viên ");
document.write("</br>");


//Exercise 6:
var Red = 0;
var Blue = 0;
var Yellow = 0; 
var White = 0;
//Câu a
do {
	Red = 120 / 5;
	Blue = 120 * 0.3;
}
while(Red + Blue + Yellow + White > 120);
document.write(" Bài 6 : </br>");
document.write(" &ensp;Câu a ");
document.write(" &ensp;Số bi đỏ là " + Red + " viên ");
document.write(" &ensp;&ensp;&ensp;Số bi xanh là " + Blue + " viên ");
document.write("</br>");
//Câu b
while (Yellow / White == 3 / 7) {
	(Yellow * 7) - (White * 3) == 0;
	Yellow + White ==60;
	(Yellow * 7) - (60 - Yellow) * 3;
	(Yellow * 7) - 180 + (3 * Yellow) == 0;
	( 10 * Yellow )== 180;	
}
Yellow = 180 / 10;
White = 60 - Yellow;
document.write(" &ensp;Câu b ")
document.write(" &ensp;Số bi vàng là " + Yellow + " viên ");
document.write(" &ensp;&ensp;&ensp;Số bi vàng là " + White + " viên ");
document.write("</br>");


//Exercise 7:
var euro = 0;
var usd = 0;
var keo = 0;
euro * 2 == 3 * usd + keo;
usd * 5 == 3 * euro + keo;
	10 * usd == 6 * euro + 2 * keo;
	10 * usd == 3 * ((3 * usd) + keo) + (2 * keo);
	10 * usd == 9 * usd + 5 * keo;
	usd = 5 * keo;
for (keo = 5; keo <= 50; keo++){
	if (keo % 5 == 0){
	usd++;
}
}

document.write(" Bài 7 : </br>");
document.write(" Cần " + usd + " để đổi được 50 viên kẹo ");

