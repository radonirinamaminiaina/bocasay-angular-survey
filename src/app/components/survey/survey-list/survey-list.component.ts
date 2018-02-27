import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/config';
import { Survey } from '../../../interface/Survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];
  constructor() { }

  ngOnInit() {
    this.fetchList();
  }
  /**
   * fetchList
   * fetch list of survey
   */
  async fetchList () {
    const data = await fetch(config.api.list);
    const finalData = await data.json();
    this.surveys = finalData;
  }
}
