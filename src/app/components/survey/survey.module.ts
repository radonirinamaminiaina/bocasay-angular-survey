import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyListComponent } from './survey-list/survey-list.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  declarations: [SurveyListComponent]
})
export class SurveyModule { }
