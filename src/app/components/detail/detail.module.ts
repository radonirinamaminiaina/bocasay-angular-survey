import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { ChartDirective } from '../../directives/chart.directive';


@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [SurveyDetailComponent, ChartDirective]
})
export class DetailModule { }
