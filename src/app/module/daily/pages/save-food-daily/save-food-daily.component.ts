import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MealStatus } from '@core/enums/repast.enum';
import { ApiService } from '@core/services/http/api.service';
import { DailyService } from '@module/daily/daily.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { IFoodResult } from '@core/interfaces/api-daily-meal.interface';

@Component({
  selector: 'app-save-food-daily',
  templateUrl: './save-food-daily.component.html',
  styleUrls: ['./save-food-daily.component.scss']
})
export class SaveFoodDailyComponent implements OnInit {

  foodsSub?: Subscription;
  foodsResult: IFoodResult[] = [];
  repastStatusResult: string[] = Object.entries(MealStatus).map(([value]) => value);
  isSubmit: boolean = false;

  foodDailyForm: FormGroup = this.formBuilder.group({
    foodName: new FormControl<string>(""),
    repastStatus: new FormControl<MealStatus>(MealStatus.BREAKFAST),
    dailyDate: new FormControl<Date>(new Date)
  });

  constructor(
    private formBuilder: FormBuilder,
    private dailyService: DailyService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SaveFoodDailyComponent>
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event) {
    this.isSubmit = true;
    this.apiService.createDailyMeal({
      foods: [this.foodDailyForm.get('foodName')?.value],
      mealStatus: this.foodDailyForm.get('repastStauts')?.value,
      scheduleDate: this.foodDailyForm.get('dailyDate')?.value,
    }).subscribe(res => {
      this.dailyService.getDailyMeal();
      this.snackBar.open("Successfully, Create Daily", 'OK');
      this.isSubmit = false;
      this.dialogRef.close();
    });
  }

  handleFoodName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dailyService.getFoods({keyword: input.value});
    this.foodsSub = this.dailyService.getFoodsUpdateListener().subscribe(res => {
      this.foodsResult = res.result;
    });
  }

}
