import { Component, Input,OnInit } from '@angular/core';
import { AppBarComponent } from "../app-bar/app-bar.component";
import { PibFormsModule } from '../../Forms Module/pib-forms.module';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  standalone : true,
  imports: [AppBarComponent, PibFormsModule]
})
export class AppShellComponent implements OnInit {
  @Input() public sideBarVisible!:boolean;
  // @ViewChild('sidenav') matSideNav!: MatSidenav;

  ngOnInit() {
    
  }

  openCloseSideNav(navToOpen:boolean){
    if(navToOpen){
      this.sideBarVisible = true;
      // this.matSideNav.open();
    }else{
      this.sideBarVisible =false;
      // this.matSideNav.close();
    }
  }
}
