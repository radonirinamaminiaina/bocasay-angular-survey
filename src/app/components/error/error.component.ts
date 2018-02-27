import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../../animation/router.animation';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [routeAnimation]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  @HostBinding('@fadeInOut')

  ngOnInit() {
  }

}
