import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FirstComponent],
  exports: [FirstComponent]
})
export class FirstFormModulModule { }
