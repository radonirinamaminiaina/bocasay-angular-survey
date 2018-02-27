import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Survey } from '../model/survey';
import { config } from '../config/config';


@Injectable()
export class ListService implements Resolve<any> {

  constructor(private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const data = await fetch(config.api.list);
    const finalData = await data.json();
    return finalData;
  }

}
