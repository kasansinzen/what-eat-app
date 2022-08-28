import { Injectable } from '@angular/core';
import { IFoodsResponse, IFoodResult, IFoodRequest } from '@core/interfaces/api-food.interface';
import { ApiService } from '@core/services/http/api.service';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  resultFoodSearch: IFoodResult[] = [];
  resultFoodSearchUpdate: Subject<IFoodsResponse> = new Subject<IFoodsResponse>();

  constructor(
    private apiService: ApiService
  ) { }

  getFoods(request: IFoodRequest = {}) {
    this.apiService.searchFoods(request).subscribe(res => {
      this.resultFoodSearch = res.result;
      this.resultFoodSearchUpdate.next(res);
    });
  }

  getFoodsUpdateListener() {
    return this.resultFoodSearchUpdate.asObservable();
  }
}
