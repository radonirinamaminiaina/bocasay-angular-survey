import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'survey',
    loadChildren: 'app/components/survey/survey.module#SurveyModule'
  },
  {
    path: 'survey/detail',
    loadChildren: 'app/components/detail/detail.module#DetailModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
