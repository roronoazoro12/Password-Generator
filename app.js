const generateStrongPassword = () => {
   const allChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*!%^";
   const passwordLength = 10; // Increase the length to your desired value.

   let password = "";

   for (let i = 0; i < passwordLength; i++) {
       const randomIndex = Math.floor(Math.random() * allChars.length);
       password += allChars[randomIndex];
   }

   return password;
}

document.getElementById("generate").onclick=function() {
   for(let i=0;i<10;i++){
   const generatedPassword = generateStrongPassword();
   alert("Generated Password: " + generatedPassword);
};
}