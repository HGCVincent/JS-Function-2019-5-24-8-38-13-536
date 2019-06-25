function Palindrome(str){
	var str1="";
	for(var i=str.length-1;i>=0;i--){
		str1= str1 + str.charAt(i);
	}
	if(str==str1){
		document.write(str1 + "是回文字符");
	}
	else{
		document.write(str1 + "不是回文字符");
	}
}

Palindrome('aabaa');