import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-save-food-daily',
  templateUrl: './save-food-daily.component.html',
  styleUrls: ['./save-food-daily.component.scss']
})
export class SaveFoodDailyComponent implements OnInit {

  public formFoodDaily: FormGroup = this.formBuilder.group({
    foodName: new FormControl(""),
    dailyDate: new FormControl(new Date)
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
