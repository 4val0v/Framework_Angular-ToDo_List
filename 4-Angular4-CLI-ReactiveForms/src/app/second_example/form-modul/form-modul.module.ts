import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SecondComponent],
  exports: [SecondComponent]
})
export class SecondFormModulModule { }
