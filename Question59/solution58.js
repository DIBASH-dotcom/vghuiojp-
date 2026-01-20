let  passangersName=["Dibash Magar","Sam Thapa","5 Thousand","45 thousand","gadi xodeii"];
let   checkOut=[true,true,true,true,true];

let count=0;
// count
for(let i=0; i<passangersName; i++) {
    if(checkOut[i]) {
        count ++;
    }
} 
// decison
if(count>=4){
    console.log("boarding allowed");
} else {
    console.log("boarding Not  allowed");
}
// print the passangersName
let index=0;
 
while (index<passangersName.length){
    console.log(passangersName[index]+" is "+(checkOut[index] ? "Verfied":"Not Verfied"))
    index ++;
}


// boarding checked
let boarding=0;
do {
    console.log("Boarding Checked for" + passangersName);
} while (boarding<passangersName.length);

switch(count) {
    case passangersName.length:
        console.log("Flight full");
        break;

        case 4:
            console.log("Boarding allowed");
            break;

             default : {
                console.log("Boarding denied");
             }
}

