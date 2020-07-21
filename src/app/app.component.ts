import { Component } from '@angular/core';
import { Assessment } from './models/assessment';
import { MotorsportsQuiz } from './models/sample-assessments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  assessment: Assessment = MotorsportsQuiz();
}
