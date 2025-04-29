import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    ],
  exports: [
    CommonModule,    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule 
  ],
})
export class CommonSharedModule {

  static forRoot() {
    return {
      ngModule: CommonSharedModule,
    }
  }
 }
