// Create a variable called password and set it’s value to a string of your choice.

// Write a conditional statement that checks if the password meets the following constraints:

// At least 10 characters long

// Contains at least one letter and one number

// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.

// Test out your conditional by changing the value of your password variable and running your file!

const password = 'sufGsdfggfpw4353';
const forbiddenWords = ['password', 'letmein', 'love'];

let hasNumber = false;
let hasLower = /[a-z]/.test(password);
let hasUpper = /[A-Z]/.test(password);
let meetsLength = false;
const hasSpaces = password.includes(' ');
let hasForbidden = false;

for(let i = 0; i < forbiddenWords.length; i++){
  if(password.includes(forbiddenWords[i])){
    hasForbidden = true;
  }
}

if(password.length > 9 && password.length < 20){
  meetsLength = true;
  const nums  = [0,1,2,3,4,5,6,7,8,9];
  for(let i = 0; i < password.length; i++){
    if(nums.includes(Number(password[i]))){
      hasNumber = true;
      break;
    }
  };
}

if(meetsLength && hasNumber && hasUpper && hasLower && !hasSpaces && !hasForbidden){
  console.log('SUCCESS');
} else {
  console.log('FAILURE');
}