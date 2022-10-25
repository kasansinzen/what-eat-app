import { Component, OnInit } from '@angular/core';
import { IDailyMealResult } from '@core/interfaces/api-daily-meal.interface';
import { DailyService } from '@module/daily/daily.service';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home-daily',
  templateUrl: './home-daily.component.html',
  styleUrls: ['./home-daily.component.scss']
})
export class HomeDailyComponent implements OnInit {

  isLoading: boolean = true;
  dailyMealSub?: Subscription;
  dailyMealResult: IDailyMealResult[] = [];

  constructor(
    private dailyService: DailyService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getDailyMeal();
  }

  getDailyMeal(): void {
    this.dailyService.getDailyMeal();
    this.dailyMealSub = this.dailyService.getDailyMealUpdateListener().subscribe(res => {
      this.dailyMealResult = res.result.map((result, index) => ({no: index + 1, ...result}));
      this.isLoading = false;
    });
  }

}
