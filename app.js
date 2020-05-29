const eightBall = document.getElementById("eightBall");

const answers = ["It is certain", "As I see it, yes", "It is decidedly so", "Most likely", "Without a doubt", "Yes - definitely", "Yes", ]

eightBall.addEventListener("click", () => {
  eightBall.classList.toggle("shake");
})
