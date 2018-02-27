import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../../animation/router.animation';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [routeAnimation.animate()]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  @HostBinding('@fadeInOut')

  ngOnInit() {
  }

}
