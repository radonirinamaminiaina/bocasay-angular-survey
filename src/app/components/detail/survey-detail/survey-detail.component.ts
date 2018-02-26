import { Component, OnInit } from '@angular/core';
import { SurveyDetail } from '../../../interface/survey-detail';
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

  fetchDetail (): void {
    const dataFetch = async (params) => {
      const data = await fetch(config.api.base(params['id']));
      const finalData = await data.json();

      finalData.forEach((element: SurveyDetail) => {
        if (element.result.constructor === Object) {
          const result = Object.keys(element.result).map((item): any => {
            return {
              name: item,
              value: element.result[item]
            };
          });
          this.surveyLabel = JSON.stringify(Object.getOwnPropertyNames(element.result));
          this.surveyValue = JSON.stringify(Object.values(element.result));

          element.result = result;
        }
      });

      this.surveyDetail = finalData;
      this.param = params['id'];
    };
    this.route.params.subscribe(dataFetch);
  }

}
