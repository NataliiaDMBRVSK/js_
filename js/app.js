let firstName = "Nataliia";
let lastName = "Dombrovska";
console.log(firstName + " " + lastName)

let a = 7;
let b = 3;
console.log(a*b)

console.log(10**6)

console.log(Math.random(50))

let number = -6;
number<=0? console.log("negative value") : console.log("positiv value");

let someText = "cijwiufhiwdjd";
console.log(someText[someText.length-2])

let text = "mbvgnfxkmjgxdsaf";
if (text.length>=1) {
    console.log(text[text.length-2])
}

let month = 5;
switch(month) {
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9:
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;

    default:
        console.log("Month not found")
    }
   

let password = "kj&";
if (password.length>5) {
    console.log("this password is strong");
 } if (password.indexOf("&")>=1) { 
    console.log("this password is strong");
 }else
      {
        console.log("this password is break")
     }



let c = 2;
let d = 4;
if (typeof c === "number" && typeof d === "number") {
    console.log(c+d)
} else {
    console.log("Sum of those items can`t be counted")
}






let textOne = "ffg"
let textTwo = "wew"
if (typeof textOne === "string" && typeof textTwo === "string" && textOne.length === textTwo.length) {
   console.log("Those items are strings and they are equal")
} else {
   console.log("Items are not compareble")
}

