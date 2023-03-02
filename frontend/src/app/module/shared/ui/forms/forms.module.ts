import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from './common-input/common-input.component';
import { CommonSelectComponent } from './common-select/common-select.component';
import { CommonTextareaComponent } from './common-textarea/common-textarea.component';



@NgModule({
  declarations: [
    CommonInputComponent,
    CommonSelectComponent,
    CommonTextareaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
