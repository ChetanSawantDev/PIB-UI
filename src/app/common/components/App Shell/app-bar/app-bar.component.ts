import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddon, InputGroupAddonModule } from 'primeng/inputgroupaddon';


interface LinkItem{label:string, tabName:string , icon:string}

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
  standalone : true,
  imports : [CommonModule, ButtonModule, InputGroupAddonModule, InputGroupModule]
})
export class AppBarComponent {
  @Input() public isSideNavOpen = false;
  @Output() openCloseSideNav:EventEmitter<boolean> = new EventEmitter<boolean>();

  isProfileMenuOpen:boolean=false;

  constructor(private router:Router){}

  openSideNavBar(){
    if(this.isSideNavOpen){
      this.isSideNavOpen = false;
      this.openCloseSideNav.emit(false);
    }else{
      this.isSideNavOpen = true;
      this.openCloseSideNav.emit(true);
    }
  }

}
