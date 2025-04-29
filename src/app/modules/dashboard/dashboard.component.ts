import { Component } from '@angular/core';
import { CommonSharedModule } from '../../common/common-shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonSharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
