
// 1. pattern quetions prectice

// for(let row=0;row<5;row++){
//   for(let col=0;col<=row;col++){
//     document.write("*");
//   }
//   document.write("<br>");
// }
// output 
// *
// **
// ***
// ****
// *****

// 2. 

for(let i=1;i<=5;i++){
  for(let j=1;j<=5-i;j++){
    document.write(" ");
  }
  for(let k=1;k<=i;k++){
    document.write("*");
  }
  document.write("<br>");
}