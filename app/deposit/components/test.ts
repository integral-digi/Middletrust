const guessTheSong = (guess: string) => {
    let lyrics = "remember to let her under your skin, then you begin to make it better";
    if(guess === "Hey Jude") {
      return "correct!";
    } else {
      return "wrong guess, try again";
    }
}
  
console.log(guessTheSong("black bird"));
  
  