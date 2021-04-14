var series = [8, 20, 3, 7, 4, 9, 2, 8, 18, 4, 10, 3, 4, 15, 3, 4, 100, 25, 4, 3, 4, 9, 4, 8, 3, 9, 4, 55, 45, 30];
document.write(" <h3>Dẫy số chưa sắp xếp</h3> ");
document.write(series);
document.write("</br>");
//Sắp xếp tăng dần
var sort;
for( var i = 0; i < 30; i++) {
	for( var j = i + 1; j < 30; j++) {
		if(series[i] > series[j]) {
			sort = series[i];
			series[i] = series[j];
			series[j] = sort;
		}
	}
}
document.write(" <h3>Dãy số theo thứ tự tăng dần là :</h3> ");
for(var i = 0; i < 30; i++) {
document.write(series[i] + "&ensp;");
}
//Sắp xếp giảm dần
for( var i = 0; i < 30; i++) {
	for( var j = i + 1; j < 30; j++) {
		if(series[i] < series[j]) {
			sort = series[i];
			series[i] = series [j];
			series[j] = sort;
		}
	}
}
document.write("</br>");
document.write(" <h3>Dãy số theo thứ tự giảm dần là :</h3> ");
for(var i = 0; i < 30; i++) {
document.write(series[i] + "&ensp;");
}

//////////////////////////////////////////////////////////////////
  var score = [40, 100, 1, 6, 35, 10];

        document.getElementById("demo1").innerHTML = score;

        score.sort(function(a, b){return a - b});

        document.getElementById("demo2").innerHTML = score;
