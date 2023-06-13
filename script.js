function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b);
	let diff = Infinity;
	let ansSum = Infinity;

	for(let i=0;i<arr.length-2;i++){
		let left = i+1;
		let right = arr.length-1;

		while(left < right){
			let sum = arr[i] + arr[left] + arr[right];
			let currDiff = Math.abs(target - sum);
			
			if(currDiff < diff){
				diff = currDiff;
				ansSum =  sum;
			}
			
			if(sum === target){
				return sum;
			}
			else if(sum < target){
				left++;
			}
			else{
				right++;
			}
		}
	}
	return ansSum;
}

module.exports = threeSum;
