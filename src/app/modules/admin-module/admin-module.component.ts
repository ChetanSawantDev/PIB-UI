import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-module',
  standalone: true,
  imports: [RouterOutlet,MatIconModule],
  templateUrl: './admin-module.component.html',
  styleUrl: './admin-module.component.scss'
})
export class AdminModuleComponent {

}
