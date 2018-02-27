import { Injectable } from '@angular/core';

import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Survey } from '../model/survey';
import { config } from '../config/config';


@Injectable()
export class ListService implements Resolve<Survey[]> {

  constructor(private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const data = await fetch(config.api.list);
    const finalData = await data.json();
    return finalData;
  }

}
