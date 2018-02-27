import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostBinding } from '@angular/core';

import { SurveyDetail } from '../../../model/survey-detail';
import { config } from '../../../config/config';
import { Qcm } from '../../../model/survey-qcm';
import { routeAnimation } from '../../../animation/router.animation';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css'],
  animations: [routeAnimation]
})
export class SurveyDetailComponent implements OnInit {
  private filterSurvey: Qcm[];
  surveyDetail: SurveyDetail[];
  surveyLabel: string[];
  surveyValue: number[];
  param: string;

  constructor(private route: ActivatedRoute) { }

  @HostBinding('@fadeInOut')

  ngOnInit() {
    this.fetchDetail();
  }
  /**
   * fetchDetail
   *
   * fetch detail of survey
   */
  fetchDetail (): void {
    // use async and await to retrieve data json detail
    const dataFetch = (data: SurveyDetail[]) => {
      // loop through our data
      data.forEach((element: SurveyDetail) => {
        if (element.result.constructor === Object) {
          // use map() to rebuild data because angular only know to loop through array
          // object return from element.result is an Object not an Array
          // it will return new Array Object which contains name and value
          const result = Object.keys(element.result).map((item): any => {
            return {
              name: item,
              value: element.result[item]
            };
          });
          // get return property name with Object.getOwnPropertyNames
          // it returns the properties into an Array
          this.surveyLabel = Object.getOwnPropertyNames(element.result);
          // sort our label
          this.surveyLabel.sort();
          // get value and return Array of value
          this.surveyValue = Object.values(element.result);
          element.result = result;
          // it will be used on filter
          this.filterSurvey = result;
        }
      });
      this.surveyDetail = data;
    };
    this.route.data.subscribe((data: { detail: SurveyDetail[]}) => dataFetch(data.detail));
    this.route.params.subscribe(params => this.param = params['id']);
  }
  filter (survey: Qcm[], value: string | number) {
    // Deep copy
    const copySurvey = [...this.filterSurvey];
    let filtered: Qcm[] = copySurvey;
    if (+value >= 0 && value !== '') {
      // return filtered element according to the criteria of search field
      filtered = this.filterSurvey.filter(item => +value === +item.value);
    }
    // rebuild our data according to the filtered data
    this.surveyDetail.forEach(item => {
      if (item.type === 'qcm') {
        item.result = filtered;
      }
    });
  }
}
