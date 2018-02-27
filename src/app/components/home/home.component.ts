import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../../animation/router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routeAnimation]
})
export class HomeComponent implements OnInit {
  constructor() { }

  @HostBinding('@fadeInOut')

  ngOnInit() {
  }

}
