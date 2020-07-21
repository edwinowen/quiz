import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: AssessmentComponent,
    children: [
      {
        path: 'motorsports',
        component: AssessmentComponent,
      },
      {
        path: 'football',
        component: AssessmentComponent,
      },
      {
        path: 'capital-cities',
        component: AssessmentComponent,
      },
      {
        path: '**',
        redirectTo: 'capital-cities',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'capital-cities',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'quiz/capital-cities',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'quiz/capital-cities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
