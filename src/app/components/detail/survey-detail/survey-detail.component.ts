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
  private surveyDetail: SurveyDetail[];
  private surveyLabel: string;
  private surveyValue: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchDetail();
  }

  fetchDetail (): void {
    const dataFetch = async (params) => {
      const data = await fetch(config.api.base(params['id']));
      const finalData = await data.json();
      const tmpQcmLabel = [];
      const tmpQcmValue = [];
      const tmpQcmArray = [];

      finalData.forEach((element: SurveyDetail) => {
        if (element.result.constructor === Object) {
          const map = Object.keys(element.result).map((item): any => {
            tmpQcmLabel.push(item);
            tmpQcmValue.push(element.result[item]);
            tmpQcmArray.push({
              name: item,
              value: element.result[item]
            });
          });
          this.surveyLabel = JSON.stringify(tmpQcmLabel);
          this.surveyValue = JSON.stringify(tmpQcmValue);
          element.result = tmpQcmArray;
        }
      });
      console.log(finalData);
      this.surveyDetail = finalData;
    };
    this.route.params.subscribe(dataFetch);
  }

}
