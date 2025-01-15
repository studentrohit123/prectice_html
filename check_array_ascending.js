let arr = [11,22,24,33];
let n = arr.length;
let count = 1;
for(let i = 0;i < n - 1 ; i++ ){
   if(arr[i] < arr[i+1]){
    count++;
   }
}
if(n == count){
  console.log("Array is Ascending order");
}else{
  console.log("Array is not Ascending order");
}