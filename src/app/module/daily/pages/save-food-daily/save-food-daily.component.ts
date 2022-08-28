import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFoodResult } from '@core/interfaces/api-food.interface';
import { DailyService } from '@module/daily/daily.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-save-food-daily',
  templateUrl: './save-food-daily.component.html',
  styleUrls: ['./save-food-daily.component.scss']
})
export class SaveFoodDailyComponent implements OnInit {

  foodsSub?: Subscription;
  foodsResult: IFoodResult[] = [];

  formFoodDaily: FormGroup = this.formBuilder.group({
    foodName: new FormControl(""),
    dailyDate: new FormControl(new Date)
  });

  constructor(
    private formBuilder: FormBuilder,
    private dailyService: DailyService
  ) { }

  ngOnInit(): void {
  }

  handleFoodName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dailyService.getFoods({keyword: input.value});
    this.foodsSub = this.dailyService.getFoodsUpdateListener().subscribe(res => {
      this.foodsResult = res.result;
    });
  }

}
