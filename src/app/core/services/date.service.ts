import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDateIso8601(date: Date | string, isNoTime: boolean = true): string {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2);
    const day = newDate.getDate();
    // const time = isNoTime ? "" : newDate.toLocaleTimeString();

    return `${year}-${month}-${day}`;
  }
}
