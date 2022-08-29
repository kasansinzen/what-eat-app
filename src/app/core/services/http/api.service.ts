import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFoodRequest, IFoodsResponse } from '@core/interfaces/api-food.interface';
import { ISaveRepastRequest, ISaveRepastResponse } from '@core/interfaces/api-repast.interface';
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
    const params = new HttpParams();
    Object.entries(request).forEach(([value, key]) => params.set(key, value));

    return params;
  }

  searchFoods(request: IFoodRequest = {}): Observable<IFoodsResponse> {
    return this.http.get<IFoodsResponse>(
      this.urlService.getApi('/food/search'),
      {params: this.setHttpParams(request)}
    );
  }

  createRepastAnDaily(request: ISaveRepastRequest): Observable<ISaveRepastResponse> {
    return this.http.post<ISaveRepastResponse>(
      this.urlService.getApi('/repast/save-daily'),
      request
    )
  }
}
