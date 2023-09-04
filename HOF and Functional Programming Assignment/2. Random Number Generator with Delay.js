/*The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.*/

let randomNumber = (max,min)=>{
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

let delay = 3000;

let timeRemianing =()=>{
  let remaining = delay/1000;
  console.log( `Remaining Time ${remaining} seconds`);
  delay-=1000;

  if(delay < 0){
      clearInterval(Interval);
      let random =randomNumber(1,100);
      console.log("Random Number Generated is",random);

  }
}

let Interval = setInterval(timeRemianing,1000);


  


