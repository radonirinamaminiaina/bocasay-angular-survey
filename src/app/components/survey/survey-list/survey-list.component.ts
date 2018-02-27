import { Component, OnInit, HostBinding } from '@angular/core';
import { config } from '../../../config/config';
import { Survey } from '../../../model/Survey';
import { ActivatedRoute } from '@angular/router';
import { routeAnimation } from '../../../animation/router.animation';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  animations: [routeAnimation.animate()]
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];
  constructor(private route: ActivatedRoute) { }

  @HostBinding('@fadeInOut')

  ngOnInit() {
    this.route.data.subscribe((data: { list: Survey[]}) => {
      this.surveys = data.list;
    });
  }
}
