//Topic = LFLC's Restaurant Recommendations
// Add in a prompt message (maybe about discount or our own recommendations?
const secretWord = "food";
    let attemptsAllowed = 3;
    const voucherAmount = 10;
 let secretAttempt = document.getElementById("secretResult")

function checkGuess() {
      const guess = document.getElementById("guessInput").value.toLowerCase();
      if (guess === secretWord) {
        secretAttempt.textContent = (`Congratulations! You guessed the secret word '${secretWord}' and won a £${voucherAmount} food voucher!`);
      } else {
        attemptsAllowed--;
        if (attemptsAllowed > 0) {
          secretAttempt.textContent = (`Oh no, that's not it. You have ${attemptsAllowed} attempt(s) left. Try again.`);
        } else {  
 // This part started as an alert but Codepen kept flagging up a href problem, we asked Sophie about this & Sophie advised to change this part.
          secretAttempt.textContent = (`Sorry, you've used all attempts. The secret word was '${secretWord}'.`);
        }
      }
    }

let recommendationResult = document.getElementById("result");
const foodChoice = document.getElementById("foodSelection");

function selectedChoice(){
  if (foodSelection.value === "Ala Carte"){
    recommendationResult.textContent = "How about you try Miller and Carter tonight 🥩 ";
  } else if (foodSelection.value === "Chinese"){
    recommendationResult.textContent = "Ohhh me too! I suggest going to the Lotus Flower. Great egg fried rice 🥡"
  } else if (foodSelection.value === "Mexican"){
    recommendationResult.textContent = "I see you. Wanting to get that party started. How about trying Chiquito 🌮"
  } else if (foodSelection.value === "Thai"){
    recommendationResult.textContent = "Kiln is the best around, trust me! 🍙"
  } else if (foodSelection.value === "Surprise Me"){
    recommendationResult.textContent = "How about Korean bbq? I know a great little spot 🍱"
  }
}

foodChoice.addEventListener("change", selectedChoice);



