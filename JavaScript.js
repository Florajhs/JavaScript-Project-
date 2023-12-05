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





// We missed </form> on HTML which helped solve the href issue.
// We wanted to bring the submit button & the text to the center but this wasn't working in CSS so put this in HTML.
// Adding in <br> to separate the lines. 
// Great working as a team as everyone brought in different ideas/aspects to the coding. All have our own strengths which we put together.
// If we had more time we would add in music, more detailed information about restaurant locations/recommendations. Have a drop down list of the restaurant recommendations which then would show a map & reviews. 
