function reverseString(str){
	var result='';
	for(var i=str.length-1;i>=0;i--){
		result += str.charAt(i);
	}
	return result;
}
document.write(reverseString("Hello"));