function countWords(message){
	var num_word = 1;
	for (var i = 0; i < message.length-1; i++)
	{
		var flag1 = (message[i] == ' ' || message[i] == ',');
		var flag2 = ((message[i + 1] <= 'Z') && (message[i + 1] >= 'A')) || ((message[i + 1] <= 'z') && (message[i + 1] >= 'a'));
		if (flag1 && flag2)
		{
			num_word++;
		}
	}
	return num_word;
}
document.write(countWords('Good morning,I love JavaScript.')); // should return 5