import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MealStatus } from '@core/enums/repast.enum';
import { IDailyMealResult } from '@core/interfaces/api-daily-meal.interface';
import { DateService } from '@core/services/date.service';
import { DialogService } from '@core/services/dialog.service';
import { ApiService } from '@core/services/http/api.service';
import { DailyService } from '@module/daily/daily.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sheet-date-daily',
  templateUrl: './sheet-date-daily.component.html',
  styleUrls: ['./sheet-date-daily.component.scss']
})
export class SheetDateDailyComponent implements OnInit {

  dailyMealSub?: Subscription;
  dailyMealResult: IDailyMealResult[] = [];

  // foodDailyForm: FormGroup = this.formBuilder.group();
  foodDailyForm: FormGroup = this.formBuilder.group({
    items: new FormArray(Object.entries(MealStatus).map(([key, value]) => new FormGroup({
      status: new FormControl<MealStatus>(value),
      food: new FormControl(""),
    })) || []),
  });

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {dateSelected: Date},
    private formBuilder: FormBuilder,
    private dailyService: DailyService,
    private apiService: ApiService,
    private dateService: DateService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getDailyMeal();
  }

  get getFoodDailtFormItems(): FormArray {
    return this.foodDailyForm.get('items') as FormArray;
  }

  getDailyMeal(): void {
    this.apiService.getDailyMeal({scheduleDate: this.data.dateSelected}).subscribe(res => {
      this.dailyMealResult = res.result.map((result, index) => ({no: index + 1, ...result}));
    })
  }

  getDailyMealByStatus(status: MealStatus | any): IDailyMealResult[] {
    return this.dailyMealResult.filter(item => item.mealStatus === status);
  }

  handleAddFood(key: number) {
    const findItems = this.getFoodDailtFormItems.at(key);
    this.apiService.createDailyMeal({
      scheduleDate: this.dateService.getDateIso8601(this.data.dateSelected),
      mealStatus: findItems.get('status')?.value,
      foods: [findItems.get('food')?.value]
    }).subscribe(res => {
      this.dialogService.alert({
        title: "Successfully, Save Daily-Meal!",
        content: "",
        btnText: "OK"
      });

      this.getDailyMeal();
      this.dailyService.getDailyMeal();
      findItems.get('food')?.reset();
    });
  }

}
