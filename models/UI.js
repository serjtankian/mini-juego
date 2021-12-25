import { questions } from "../data/questions.js";

export class UI {
  constructor() {}

  /**
   *
   * @param {string} text el texto de la pregunta.
   */

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string} choices son los choices para seleccionar
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";

      button.addEventListener("click", () => callback(choices[i]));
      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score el parametro numerico que inidica el puntaje en la interfaz
   */

  showScore(score) {
    const myScore = document.getElementById("score");
    myScore.innerHTML = `<h1> Score: ${score}</h1>`;
  }
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
