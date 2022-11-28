import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { SheetDateDailyComponent } from './sheet-date-daily.component';

describe('SheetDateDailyComponent', () => {
  let component: SheetDateDailyComponent;
  let fixture: ComponentFixture<SheetDateDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetDateDailyComponent ],
      imports: [
        MatBottomSheetModule,
        MatDialogModule
      ],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetDateDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
