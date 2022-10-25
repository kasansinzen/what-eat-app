import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDailyComponent } from './table-daily.component';

describe('TableDailyComponent', () => {
  let component: TableDailyComponent;
  let fixture: ComponentFixture<TableDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDailyComponent ]
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
