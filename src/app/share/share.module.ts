import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcribeLineComponent } from './subcribe-line/subcribe-line.component';



@NgModule({
  declarations: [SubcribeLineComponent],
  exports: [
    SubcribeLineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
