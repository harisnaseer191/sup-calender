import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupCalenderComponent } from './sup-calender.component';
import { CalenderComponent } from './calender/calender.component';



@NgModule({
  declarations: [
    SupCalenderComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SupCalenderComponent,
    CalenderComponent
  ]
})
export class SupCalenderModule { }
