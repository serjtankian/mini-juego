import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    alert("Felicidades,haz finalizado Questions Game");
  }
  ui.showScore(quiz.score);
  ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  ui.showQuestion(quiz.getQuestionIndex().text);
  ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) => {
    quiz.guess(currentChoice);
    renderPage(quiz, ui);
  });
};

function Main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

Main();
