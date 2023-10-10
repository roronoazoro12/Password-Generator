const int = "0123456789";
const char = "abcdefghijklmnopqrstuvwxyz";
const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "@#$&*";
this.pass = "";

const randomfun  = (len) => {
 if(len<4){
    console.log("Invalid");
 }
 else{
    let i=0;
    while(i<len){
    this.pass += int[Math.floor(Math.random()*int.length)];
    this.pass += char[Math.floor(Math.random()*char.length)];
    this.pass += special[Math.floor(Math.random()*special.length)];
    this.pass += cap[Math.floor(Math.random()*cap.length)];
    i=i+4;
 }
}
 return this.pass;
}

const generatedpass=randomfun(9);
console.log(generatedpass);