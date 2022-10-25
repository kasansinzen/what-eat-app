import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDailyMealResult } from '@core/interfaces/api-daily-meal.interface';
import { ITableColumn } from '@core/interfaces/material.interface';
import { SaveFoodDailyComponent } from '@module/daily/pages/save-food-daily/save-food-daily.component';
import * as moment from 'moment';

@Component({
  selector: 'app-table-daily',
  templateUrl: './table-daily.component.html',
  styleUrls: ['./table-daily.component.scss']
})
export class TableDailyComponent implements OnInit {
  @Input() dailyMealResult: IDailyMealResult[] = [];

  dailyMealColumns: ITableColumn<IDailyMealResult>[] = [
    {
      columnDef: 'no',
      header: 'No.',
      cell: element => `${(element as any)?.no}`,
    },
    {
      columnDef: 'scheduleDate',
      header: 'Date',
      cell: element => `${moment(element.scheduleDate).format('LL')}`,
    },
    {
      columnDef: 'mealStatus',
      header: 'Meal Status',
      cell: element => `${element.mealStatus}`,
    },
    {
      columnDef: 'foods',
      header: 'Foods',
      cell: element => `${element.foods.join()}`,
    },
  ];
  dailyMealDisplayedColumns = this.dailyMealColumns.map(c => c.columnDef);

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SaveFoodDailyComponent, {
      position: {
        top: "0px"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
