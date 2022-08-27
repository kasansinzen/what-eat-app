import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFoodResult } from '@core/interfaces/api-food';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  searchFoods() {
    return this.http.get<IFoodResult[]>(this.urlService.getApi('/food/search'));
  }
}
