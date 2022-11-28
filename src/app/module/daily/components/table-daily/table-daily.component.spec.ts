import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { TableDailyComponent } from './table-daily.component';

describe('TableDailyComponent', () => {
  let component: TableDailyComponent;
  let fixture: ComponentFixture<TableDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDailyComponent ],
      providers: [
        Overlay,
        { provide: MatDialog, useValue: [] }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
