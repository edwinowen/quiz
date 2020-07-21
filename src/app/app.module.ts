import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { MultipleChoiceComponent } from './components/assessment/questions/multiple-choice/multiple-choice.component';
import { MultipleAnswerComponent } from './components/assessment/questions/multiple-answer/multiple-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceComponent,
    AssessmentComponent,
    MultipleAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
