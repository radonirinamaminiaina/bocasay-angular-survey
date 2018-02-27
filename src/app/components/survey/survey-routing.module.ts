import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { ListService } from '../../services/list.service';

const routes: Routes = [
  {
    path: '',
    component: SurveyListComponent,
    resolve: {
      list: ListService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ListService]
})
export class SurveyRoutingModule { }
