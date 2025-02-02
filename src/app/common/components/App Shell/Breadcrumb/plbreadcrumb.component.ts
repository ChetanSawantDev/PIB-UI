import { Component } from '@angular/core';
import { BreadCrumbData } from './BreadCrumbMetaData';
import { NavigationService } from './breadcrumb.service';

@Component({
  selector: 'app-plbreadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './plbreadcrumb.component.html',
  styleUrl: './plbreadcrumb.component.scss'
})
export class PLBreadcrumbComponent {
  constructor(private navService:NavigationService){}

  items: BreadCrumbData[] | undefined;
  home: BreadCrumbData | undefined;

  ngOnInit() {
    this.navService.userNavigationHistory.subscribe(value => this.items = value);
  }
}
