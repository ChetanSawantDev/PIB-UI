import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreadCrumbComponentList } from './BreadCrumbMetaData';
import { ReplaySubject } from 'rxjs';
import { BreadCrumbData } from './BreadCrumbMetaData';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  userNavigationHistory = new ReplaySubject<BreadCrumbData[]>(3);
  constructor(private router:Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fullUrl = event.urlAfterRedirects;
        let currentBreadCrumb: BreadCrumbData[] = new BreadCrumbComponentList().getBreadCrumb(fullUrl);
        this.userNavigationHistory.next(currentBreadCrumb);
      }
    });
  }
  
  async setBreadcrumbData(){
    let componentHref = this.router.url.slice(1);
    let componentHrefLst : string[] | string = componentHref.indexOf('/') !== -1 ? componentHref.split('/') : componentHref ;
    if(typeof componentHrefLst == 'string'){
      this.userNavigationHistory.next([this.getaComponentDataUsingRef(componentHrefLst)]);
    }else{

    }

  }

  getaComponentDataUsingRef(compRef:string) : BreadCrumbData{
    return new BreadCrumbComponentList()[compRef as keyof BreadCrumbComponentList] as BreadCrumbData;
  }

}
