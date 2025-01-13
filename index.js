
let row;
let col;

for(row = 1; row<=5; row++){
    for(col = 1; col<= row; col++){
        document.write(col+ " ");
    }
    // document.write("<br>");
    for(col = row-1; col >= 1; col--){
        document.write(col+ " ");
    }
    document.write("<br>");
    
}

// for(row = 1; row<=5; row++){
//     for(col = 1; col<= row; col++){
//         document.write(col+ " ");
//     }
//     document.write("<br>");
    
// }