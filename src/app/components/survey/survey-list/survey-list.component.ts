import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/config';
import { Survey } from '../../../interface/Survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  private surveys: Survey;
  constructor() { }

  ngOnInit() {
    this.fetchList();
  }

  async fetchList () {
    const data = await fetch(config.api.list);
    const json = await data.json();
    this.surveys = json;
  }
}
