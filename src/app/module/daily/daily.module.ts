import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { SaveFoodDailyComponent } from './pages/save-food-daily/save-food-daily.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeDailyComponent } from './pages/home-daily/home-daily.component';
import { SheetDateDailyComponent } from './components/sheet-date-daily/sheet-date-daily.component';
import { CalendarDailyComponent } from './components/calendar-daily/calendar-daily.component';
import { TableDailyComponent } from './components/table-daily/table-daily.component';


@NgModule({
  declarations: [
    SaveFoodDailyComponent,
    HomeDailyComponent,
    SheetDateDailyComponent,
    CalendarDailyComponent,
    TableDailyComponent
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class DailyModule { }
