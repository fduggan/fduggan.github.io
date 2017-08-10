/*arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
	function getNum(){
		var low = 0;
		var x = document.getElementById("numInput").value;
		var high = arr.length -1;
		var place = -1
		while (low <= high){
			var mid  = Math.floor((low + high)/2)
			if(arr [mid]== x){
				place= mid;
				low = high + 1;
			}
			else if (arr[mid]<x){
				low = mid + 1;
			}
			else {
				high = mid -1;
			}
		}
		console.log (place);
		if (place == -1){
			document.getElementById("number").innerHTML = "Sorry, number is not found.";
		}
		else{
			document.getElementById("number").innerHTML = "Number found. Thanks for getting me out of that bind " + place + ".";
		}
	}
*/
num = [9,22,7,8,2,44,5,10,33]
function getNum(){
	for(var i = 0; i < num.length; i++){
		var temp = num[i]
		var j = i;
		while (j > 0 && num[j] < num[j - 1]){
			num[j]= num[j - 1]
			j = j - 1
			num[j] = temp
		}
	}
	console.log(num);
}