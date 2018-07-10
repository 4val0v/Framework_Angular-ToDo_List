import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstFormModulModule } from './first_example/form-modul/form-modul.module';
import { SecondFormModulModule } from './second_example/form-modul/form-modul.module';
import { TestModule  } from './test/form-modul/form-modul.module';
import { ThirdFormModulModule } from './third_example/form-modul/form-modul.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FirstFormModulModule,
    SecondFormModulModule,
    ThirdFormModulModule,
    TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
