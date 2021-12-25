export class Question {
  /**
   *
   * @param {string} text éste es el texto de la pregunta
   * @param {string[]} choice éste es el array de opciones
   * @param {string} answer ésta es la respuesta válida.
   */

  constructor(text, choice, answer) {
    (this.text = text), (this.choice = choice), (this.answer = answer);
  }
  /**
   *
   * @param {string} choice
   * @returns{bolean}
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

const question = new Question();
question.correctAnswer();
