import { Injectable } from '@angular/core';

import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { config } from '../config/config';
import { SurveyDetail } from '../model/survey-detail';

@Injectable()
export class DetailService implements Resolve<SurveyDetail[]> {

  constructor(private router: Router) { }
  async resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    try {
      const data = await fetch(config.api.base(id));
      const finalData = await data.json();
      return finalData;
    } catch (e) {
      this.router.navigate(['404'], { skipLocationChange: true });
      return null;
    }
  }
}
