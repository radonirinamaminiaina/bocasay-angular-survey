import { Component, OnInit } from '@angular/core';
import { SurveyDetail } from '../../../model/survey-detail';
import { config } from '../../../config/config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {
  surveyDetail: SurveyDetail[];
  surveyLabel: string;
  surveyValue: string;
  param: string;

  constructor(private route: ActivatedRoute) { }

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
          this.surveyLabel = JSON.stringify(Object.getOwnPropertyNames(element.result));
          // get value and return Array of value
          this.surveyValue = JSON.stringify(Object.values(element.result));
          element.result = result;
        }
      });
      this.surveyDetail = data;
    };
    this.route.data.subscribe((data: { detail: SurveyDetail[]}) => dataFetch(data.detail));
    this.route.params.subscribe(params => this.param = params['id']);
  }

}
