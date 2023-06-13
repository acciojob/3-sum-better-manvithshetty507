function threeSum(arr, target) {
// write your code here
	let ans = [];
	diff = 100000;
  for(let i=0;i<arr.length-2;i++){
	  let x = arr[i];
	  for(let j=i+1;j<arr.length-1;j++){
		  let y = arr[j];
		  for(let k=j+1;k<arr.length;k++){
			  let z = arr[k];
			  if(target - (x + y + z) < diff){
				  diff = target - (x + y + z);
				  ans[0] = x ; ans[1] = y; ans[2] = z;
			  }
		  }
	  }
  }
	return ans;
  
}

module.exports = threeSum;
