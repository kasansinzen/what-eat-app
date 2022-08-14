import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFoodDailyComponent } from './save-food-daily.component';

describe('SaveFoodDailyComponent', () => {
  let component: SaveFoodDailyComponent;
  let fixture: ComponentFixture<SaveFoodDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFoodDailyComponent ]
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
