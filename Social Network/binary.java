arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
	function getNum(document.getElementById.value){
		var low = 0;
		var high = arr.length -1;
		var i = -1
		while (low < = high) {
			var mid  = Math.floor((low + high)/2)
			if(arr [mid]== x){
				i= mid;
				low = high + 1;
			}
			else if (arr[mid]<x){
				low = mid + 1;
			}
			else {
				high = mid -1;
			}
		}
		return i; 
	}