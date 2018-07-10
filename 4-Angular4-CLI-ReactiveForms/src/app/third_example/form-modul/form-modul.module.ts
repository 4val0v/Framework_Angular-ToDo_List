import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdFormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ThirdFormComponent],
  exports: [ThirdFormComponent]
})
export class ThirdFormModulModule { }
