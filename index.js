let name = prompt("Enter your username: ");

let point = 0;
for (i = 0; i > 5; i++){
  point = point + 1
}


function greet(name){
  console.log("Hello " + name + ",");
}

greet(name);


//stage 1
function guessNumber(){

  // generating a random integer from 1 to 2
  const random = Math.floor(Math.random() * 2) + 1;

 console.log("Level 1");
  
//take user's input
  let number = parseInt(prompt("Guess a number from 1 to 2: "));

  //take user's input until the guess is right
  // while (number != random){
  //   console.log("You guessed wrong, Try Again!");
  //   number = parseInt(prompt("Guess a number from 1 to 2: "))
  // }

  if (number == random){
    console.log("You guessed right. You've scored " + point + " point" );
    
  }

}

guessNumber()


//stage 2
function guessNumber2(){

  // generating a random integer from 1 to 3
  const random = Math.floor(Math.random() * 3) + 1;

 console.log("Level 2");
  
//take user's input
  let number = parseInt(prompt("Guess a number from 1 to 3: "));

  //take user's input until the guess is right
  // while (number != random){
  //   console.log("You guessed wrong, Try Again!");
  //   number = parseInt(prompt("Guess a number from 1 to 3: "))
  // }

  if (number == random){
    console.log("You guessed right. You've scored " + point + " points");
    
  }

}

guessNumber2()



//stage 3
function guessNumber3(){

  // generating a random integer from 1 to 4
  const random = Math.floor(Math.random() * 4) + 1;

 console.log("Level 3");
  
//take user's input
  let number = parseInt(prompt("Guess a number from 1 to 4: "));

  //take user's input until the guess is right
  // while (number != random){
  //   console.log("You guessed wrong, Try Again!");
  //   number = parseInt(prompt("Guess a number from 1 to 4: "))
  // }

  if (number == random){
    console.log("You guessed right. You've scored " + point + " points");
    
  }

}

guessNumber3()

//stage 4

function guessNumber4(){

  // generating a random integer from 1 to 5
  const random = Math.floor(Math.random() * 5) + 1;

 console.log("Level 3");
  
//take user's input
  let number = parseInt(prompt("Guess a number from 1 to 5: "));

  //take user's input until the guess is right
  // while (number != random){
  //   console.log("You guessed wrong, Try Again!");
  //   number = parseInt(prompt("Guess a number from 1 to 5: "))
  // }

  if (number == random){
    console.log("You guessed right. You've scored " + point + " points");
    
  }

}

guessNumber4()