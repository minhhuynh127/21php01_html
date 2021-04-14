
var n = prompt('Nhập giá trị n');
	n = parseInt(n);
	var count = 0;
	document.write("<h3>Tam giác số</h3>");
	//Tạo hàng
	for( var i=1;i<=n;i++) {
		//Tạo cột *
		for( var j=1;j<=i;j++) {
			count++;
			document.write(count);
		}
		document.write("<br/>");
	}
document.write("<br/>");
document.write("<h3>Tam giác cân</h3>");
	for(var i = 1; i <= n; i++)
    {
    	//in dấu cách
        for(var j = 0; j <= n-i; j++)
           document.write('&ensp;');
       //in dấu *
        for(var j = 1; j <= 2*i-1; j++)
           document.write("*");
      	   document.write("</br>");
    }
document.write("<br/>");
document.write("<h3>Tam giác đêu</h3>");
for (var i = 0; i < n; i++) { 
	// for (var j = n; j > i; j--)
	for(var j = 0; j < n-i; j++)
	 { document.write('-'); }
	  for (var j = 0; j <= i; j++)
	   {document.write('*&nbsp;'); }
	 document.write("</br>");

}
	