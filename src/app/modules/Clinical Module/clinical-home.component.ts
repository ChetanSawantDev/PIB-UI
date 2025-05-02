import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clinical-home',
  standalone: true,
  imports: [CommonModule,RouterModule, MatIconModule],
  templateUrl: './clinical-home.component.html',
  styleUrl: './clinical-home.component.scss'
})
export class ClinicalHomeComponent {

}
