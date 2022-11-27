import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { IFoodRequest, IFoodsResponse } from '@core/interfaces/api-food.interface';
import { IDailyMealRequest, IDailyMealResponse, IFoodRequest, IFoodsResponse, ISaveDailyMealRequest, ISaveDailyMealResponse } from '@core/interfaces/api-daily-meal.interface';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  private setHttpParams(request: {[key: string]: any}) {
    let params = new HttpParams();
    Object.entries(request).forEach(([key, value]) => {
      if(key && value) params = params.append(key, value);
    });
    return params;
  }

  getDailyMeal(request: IDailyMealRequest): Observable<IDailyMealResponse> {
    return this.http.get<IDailyMealResponse>(
      this.urlService.getApi('/daily-meal'),
      {params: this.setHttpParams(request)}
    );
  }

  getFoods(request: IFoodRequest = {}): Observable<IFoodsResponse> {
    return this.http.get<IFoodsResponse>(
      this.urlService.getApi('/daily-meal/foods'),
      {params: this.setHttpParams(request)}
      );
  }

  createDailyMeal(request: ISaveDailyMealRequest): Observable<ISaveDailyMealResponse> {
    return this.http.post<ISaveDailyMealResponse>(
      this.urlService.getApi('/daily-meal'),
      request
    )
  }


}
