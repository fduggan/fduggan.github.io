array = [9,22,7,8,2,44,5,10,33]

	for(var i = 0 < array.length; i++){
		var temp = num[i]
		var j = i;
		while (j > 0 && num[j] < num[j - 1]){
			num[j]= num[j - 1]
			j = j - 1
			num[j] = temp
		}
	}