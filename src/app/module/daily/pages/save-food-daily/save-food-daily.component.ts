import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RepastStatus } from '@core/enums/repast.enum';
import { IFoodResult } from '@core/interfaces/api-food.interface';
import { ApiService } from '@core/services/http/api.service';
import { DailyService } from '@module/daily/daily.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-food-daily',
  templateUrl: './save-food-daily.component.html',
  styleUrls: ['./save-food-daily.component.scss']
})
export class SaveFoodDailyComponent implements OnInit {

  foodsSub?: Subscription;
  foodsResult: IFoodResult[] = [];
  repastStatusResult: string[] = Object.entries(RepastStatus).map(([value]) => value);

  foodDailyForm: FormGroup = this.formBuilder.group({
    foodName: new FormControl<string>(""),
    repastStatus: new FormControl<RepastStatus>(RepastStatus.BREAKFAST),
    dailyDate: new FormControl<Date>(new Date)
  });

  constructor(
    private formBuilder: FormBuilder,
    private dailyService: DailyService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event) {
    this.apiService.createRepastAnDaily({
      foods: [this.foodDailyForm.get('foodName')?.value],
      repastStatus: this.foodDailyForm.get('repastStauts')?.value,
      sheduleDate: this.foodDailyForm.get('dailyDate')?.value,
    }).subscribe(res => {
      console.log("Submit", res);
      this.snackBar.open("Successfully, Create Daily", 'OK');
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
