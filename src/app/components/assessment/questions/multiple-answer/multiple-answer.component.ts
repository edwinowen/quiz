import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MultipleAnswerQuestion, QuestionResult } from '../../../../models/question-types';

@Component({
  selector: 'app-multiple-answer',
  templateUrl: '../question.component.html',
  styleUrls: ['../question.component.css']
})
export class MultipleAnswerComponent implements OnInit {

  @Input() content: MultipleAnswerQuestion;
  @Output() result: EventEmitter<QuestionResult> = new EventEmitter<QuestionResult>();
  submitted: boolean = false;
  shouldLeave: string;

  constructor() { }

  ngOnInit(): void {
  }

  isSelected(answer: string) : boolean {
    const selected = this.content.selectedAnswers;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return selected.includes(index);
  }

  isAnswerValid() {
    return this.content.selectedAnswers.length === this.content.correctAnswers.length;
  }

  isCorrect(answer: string) : boolean {
    if (!this.submitted) return;
    const correct = this.content.correctAnswers;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return correct.includes(index);
  }

  isIncorrect(answer: string) : boolean {
    if (!this.submitted) return;
    const selected = this.content.selectedAnswers;
    const correct = this.content.correctAnswers;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return !correct.includes(index) && selected.includes(index);
  }

  setSelected(answer: string) : void {
    if (this.submitted) return;
    const selected = this.content.selectedAnswers;
    const answers = this.content.answers;
    const answerIndex = answers.indexOf(answer);
    const selectedIndex = selected.indexOf(answerIndex);
    switch (selectedIndex) {
      case -1: this.content.selectedAnswers.push(answerIndex); break;
      default: this.content.selectedAnswers.splice(selectedIndex, 1); break;
    }
  }

  submitAnswer() : void {
    this.submitted = true;
    const correctAnswers = this.content.correctAnswers.sort();
    const selectedAnswers = this.content.selectedAnswers.sort();
    const results = correctAnswers.map(x => selectedAnswers.includes(x))
    const result: QuestionResult = {
      correct: !results.includes(false),
      points: 20,
    }
    this.result.emit(result);
    setTimeout(() => {
      this.shouldLeave = Math.random() > 0.5 ? 'leave-left' : 'leave-right';
    }, 5000);
  }

}
