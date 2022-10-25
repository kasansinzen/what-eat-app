import { Injectable } from '@angular/core';
import { IDailyMealResponse, IDailyMealResult, IFoodsResponse, IFoodResult, IFoodRequest, IDailyMealRequest } from '@core/interfaces/api-daily-meal.interface';
// import { IFoodsResponse, IFoodResult, IFoodRequest } from '@core/interfaces/api-food.interface';
import { ApiService } from '@core/services/http/api.service';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  resultFoodSearch: IFoodResult[] = [];
  resultFoodSearchUpdate: Subject<IFoodsResponse> = new Subject<IFoodsResponse>();

  resultDailyMeal: IDailyMealResult[] = [];
  resultDailyMealUpdate: Subject<IDailyMealResponse> = new Subject<IDailyMealResponse>();

  constructor(
    private apiService: ApiService
  ) { }

  getFoods(request: IFoodRequest = {}) {
    this.apiService.getFoods(request).subscribe(res => {
      this.resultFoodSearch = res.result;
      this.resultFoodSearchUpdate.next(res);
    });
  }
  getFoodsUpdateListener() {
    return this.resultFoodSearchUpdate.asObservable();
  }

  getDailyMeal(request: IDailyMealRequest = {}) {
    this.apiService.getDailyMeal(request).subscribe(res => {
      this.resultDailyMeal = res.result;
      this.resultDailyMealUpdate.next(res);
    });
  }
  getDailyMealUpdateListener() {
    return this.resultDailyMealUpdate.asObservable();
  }

}
