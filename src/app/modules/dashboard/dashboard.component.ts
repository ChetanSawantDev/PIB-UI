import { Component } from '@angular/core';
import { CommonSharedModule } from '../../common/common-shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonSharedModule,MatButtonModule, MatMenuModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
