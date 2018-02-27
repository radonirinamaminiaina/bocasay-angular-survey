import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { DetailService } from '../../services/detail.service';

const routes: Routes = [
  {
    path: '',
    component: SurveyDetailComponent,
    resolve: {
      detail: DetailService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DetailService]
})
export class DetailRoutingModule { }
