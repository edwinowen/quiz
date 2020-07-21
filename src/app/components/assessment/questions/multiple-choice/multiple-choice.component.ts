import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MultipleChoiceQuestion, QuestionResult } from '../../../../models/question-types'

@Component({
  selector: 'app-multiple-choice',
  templateUrl: '../question.component.html',
  styleUrls: ['../question.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() content: MultipleChoiceQuestion;
  @Output() result: EventEmitter<QuestionResult> = new EventEmitter<QuestionResult>();
  submitted: boolean = false;
  shouldLeave: string;

  constructor() { }

  ngOnInit(): void {
  }

  isSelected(answer: string) : boolean {
    const selected = this.content.selectedAnswer;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return selected === index;
  }

  isAnswerValid() {
    return this.content.selectedAnswer !== null;
  }

  isCorrect(answer: string) : boolean {
    if (!this.submitted) return;
    const correct = this.content.correctAnswer;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return correct === index;
  }

  
  isIncorrect(answer: string) : boolean {
    if (!this.submitted) return;
    const selected = this.content.selectedAnswer;
    const correct = this.content.correctAnswer;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    return correct !== index && selected === index;
  }

  setSelected(answer: string) : void {
    if (this.submitted) return;
    const selected = this.content.selectedAnswer;
    const answers = this.content.answers;
    const index = answers.indexOf(answer);
    this.content.selectedAnswer = index === selected ? null : index;
  }

  submitAnswer() : void {
    this.submitted = true;
    const correctAnswer = this.content.correctAnswer;
    const selectedAnswer = this.content.selectedAnswer;
    const result: QuestionResult = {
      correct: correctAnswer === selectedAnswer,
      points: 20,
    }
    this.result.emit(result);
    setTimeout(() => {
      this.shouldLeave = Math.random() > 0.5 ? 'leave-left' : 'leave-right';
    }, 5000);
  }

}
