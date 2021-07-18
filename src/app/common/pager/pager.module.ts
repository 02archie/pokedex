import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ]
})
export class PagerModule { }
