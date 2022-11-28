import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SaveFoodDailyComponent } from './save-food-daily.component';

describe('SaveFoodDailyComponent', () => {
  let component: SaveFoodDailyComponent;
  let fixture: ComponentFixture<SaveFoodDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SaveFoodDailyComponent,
        MatAutocomplete
      ],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        MatSnackBar,
        Overlay,
        { provide: MatDialogRef, useValue: [] }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveFoodDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
