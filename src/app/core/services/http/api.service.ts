import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFoodRequest, IFoodsResponse } from '@core/interfaces/api-food.interface';
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
    const params = new HttpParams();
    Object.entries(request).forEach(([value, key]) => params.set(key, value));

    return params;
  }

  searchFoods(request: IFoodRequest = {}) {
    return this.http.get<IFoodsResponse>(
      this.urlService.getApi('/food/search'),
      {params: this.setHttpParams(request)}
    );
  }
}
