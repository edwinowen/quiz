import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../models/assessment'
import { Question, MultipleChoiceQuestion, MultipleAnswerQuestion, QuestionResult } from 'src/app/models/question-types';
import { MotorsportsQuiz, FootballQuiz, CapitalCitiesQuiz } from 'src/app/models/sample-assessments';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessment: Assessment;
  alternate: boolean = false;
  assessmentComplete = false;

  constructor() { }

  ngOnInit(): void {
    console.log(window.location.href.split('/').pop());
    switch(window.location.href.split('/').pop()) {
      case 'motorsports': this.assessment = MotorsportsQuiz(); break;
      case 'football': this.assessment = FootballQuiz(); break;
      case 'capital-cities': this.assessment = CapitalCitiesQuiz(); break;
    }
    setInterval(() => this.alternate = !this.alternate, 200);
  }

  isMultipleChoice(question: Question) : boolean {
    let mcq : MultipleChoiceQuestion = <MultipleChoiceQuestion>question.content;
    return mcq.correctAnswer !== undefined;
  }
  
  isMultipleAnswer(question: Question) : boolean {
    let maq : MultipleAnswerQuestion = <MultipleAnswerQuestion>question.content;
    return maq.correctAnswers !== undefined;
  }

  onQuestionResult(result: QuestionResult) : void {
    this.assessment.progress += result.points;
    if (result.correct) {
      this.assessment.score = this.assessment.score ? this.assessment.score += result.points : result.points
    }
    if (this.assessment.progress === 100) {
      setTimeout(() => this.assessmentComplete = true, 6000);
    }
  }

  setProgressWidth() : string {
    if (this.assessment.progress === undefined) return '0%';
    return this.assessment.progress + '%';
  }

  reset() : void {
    window.location.reload();
  }

}
