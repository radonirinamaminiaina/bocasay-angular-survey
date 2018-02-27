import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/config';
import { Survey } from '../../../model/Survey';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { list: Survey[]}) => {
      this.surveys = data.list;
    });
  }
}
