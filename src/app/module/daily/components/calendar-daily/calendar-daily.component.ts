import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SheetDateDailyComponent } from '@module/daily/components/sheet-date-daily/sheet-date-daily.component';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { IDailyMealResult } from '@core/interfaces/api-daily-meal.interface';
import { DateService } from '@core/services/date.service';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-calendar-daily',
  templateUrl: './calendar-daily.component.html',
  styleUrls: ['./calendar-daily.component.scss']
})
export class CalendarDailyComponent implements OnInit, OnChanges {
  @Input() dailyMealResult: IDailyMealResult[] = [];
  @Input() isLoading: boolean = true;

  dateSelected: Date = new Date();
  dateClass!: MatCalendarCellClassFunction<Date>;

  constructor(
    private bottomSheet: MatBottomSheet,
    private dateService: DateService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.datePickerClassHandler();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changeDailyMealResult = changes['dailyMealResult'];

    if(changeDailyMealResult && !changeDailyMealResult.firstChange) {
      this.utilService.reloadComponent();
    }
  }

  datePickerClassHandler() { 
    this.dateClass = (callDate, view) => {
      if(view !== 'month') return "";
      const dailyMealDates = this.dailyMealResult.map(daily => new Date(daily.scheduleDate).toLocaleDateString());
      const isHaveDaily = dailyMealDates.includes(new Date(callDate).toLocaleDateString());
      
      return isHaveDaily ? "highligh-daily" : "";
    }
  }

  openBottomSheet(callDate: Date | null): void {
    try {
      if(!callDate) throw new Error("No date selected");
      this.bottomSheet.open(SheetDateDailyComponent, {
        data: {dateSelected: this.dateService.getDateIso8601(callDate)}
      });
    } catch(e) {
      console.error(e);
    }
  }
}
