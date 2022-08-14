import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { SaveFoodDailyComponent } from './pages/save-food-daily/save-food-daily.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SaveFoodDailyComponent
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DailyModule { }