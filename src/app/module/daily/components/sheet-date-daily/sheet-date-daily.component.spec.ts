import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDateDailyComponent } from './sheet-date-daily.component';

describe('SheetDateDailyComponent', () => {
  let component: SheetDateDailyComponent;
  let fixture: ComponentFixture<SheetDateDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetDateDailyComponent ]
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
