import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModuleLinksDet } from '../../../model/ModuleLinksDet';
import { CommonModule,  } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss',
  standalone : true,
  imports : [CommonModule, RouterLink]
})
export class SideNavBarComponent {
  @Input() sideBarVisible!: boolean;
  @Output() setCloseSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  moduleLinkData: ModuleLinksDet[] = [
    { MLD_title: "Admin Module", MLD_faIcon: "fa-solid fa-user-tie", MLD_description: "Manage system settings, user roles, and permissions.", MLD_faIconSecondary: "fa-solid fa-gear", MLD_href: "admin" },
    { MLD_title: "HR Module", MLD_faIcon: "fa-solid fa-users", MLD_description: "Handle employee records, recruitment, and HR policies.", MLD_href: "hr" },
    { MLD_title: "Finance Module", MLD_faIcon: "fa-solid fa-coins", MLD_description: "Track financial transactions, budgeting, and reporting.", MLD_href: "finance" },
    { MLD_title: "Inventory Module", MLD_faIcon: "fa-solid fa-warehouse", MLD_description: "Track stock levels, manage warehouse operations, and inventory control.", MLD_href: "inventory" },
    { MLD_title: "Production Module", MLD_faIcon: "fa-solid fa-industry", MLD_description: "Oversee production processes, scheduling, and manufacturing.", MLD_href: "production" },
    { MLD_title: "Quality Module", MLD_faIcon: "fa-solid fa-check-circle", MLD_description: "Ensure product quality standards and manage quality control.", MLD_href: "quality" },
    { MLD_title: "Sales Module", MLD_faIcon: "fa-solid fa-shopping-bag", MLD_description: "Handle sales processes, order management, and customer interactions.", MLD_href: "sales" },
    { MLD_title: "CRM Module", MLD_faIcon: "fa-solid fa-handshake", MLD_description: "Manage customer relationships, support, and engagement.", MLD_href: "crm" },
    { MLD_title: "Retailers Module", MLD_faIcon: "fa-solid fa-store", MLD_description: "Manage retailer accounts, sales channels, and retail operations.", MLD_href: "retailers" },
    { MLD_title: "Logistics/Shipping Module", MLD_faIcon: "fa-solid fa-truck-moving", MLD_description: "Manage shipping, distribution, and logistics operations.", MLD_href: "logistics" },
  ];

  closeSideBar(): void {
    this.setCloseSideNav.emit(false);
  }
}
