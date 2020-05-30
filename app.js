const eightBall = document.getElementById("eightBall");
const answer = document.getElementById("answer");

const answers = [
  "It is certain",
  "As I see it, yes",
  "It is decidedly so",
  "Most likely",
  "Without a doubt",
  "Yes - definitely",
  "Yes", "You may rely on it",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

eightBall.addEventListener("click", (e) => {
  eightBall.classList.toggle("shake");
  answer.innerHTML = answers[getRandom()];
  eightBall.addEventListener("animationend", animationEndCallback);
})

animationEndCallback = (e) => {
    eightBall.removeEventListener("animationend", animationEndCallback);
    eightBall.classList.remove("shake");
}

function getRandom() {
  return Math.floor(Math.random() * 17) + 1;

}
