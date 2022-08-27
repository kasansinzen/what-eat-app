import { Injectable } from '@angular/core';
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private apiUrl: string = environment.apiUrl;

  constructor() { }

  getApi(url: string = "") {
    return `${this.apiUrl}${url}`;
  }
}
