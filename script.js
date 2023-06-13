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
			  
			  let currdiff = target - (x + y + z);
			  if(currdiff < 0) currdiff *= -1;
			  //console.log(currdiff,x,y,z);
			  if(currdiff < diff){
				  diff = currdiff;
				  ans[0] = x ; ans[1] = y; ans[2] = z;
			  }
		  }
	  }
  }
	return ans;
}

module.exports = threeSum;
