import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions
   */

  constructor(questions) {
    this.questions = questions;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  getPLayer() {}
  getLevel() {}
  guess(answer) {
    console.log(answer);
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }
}
