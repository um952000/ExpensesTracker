import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTrackerComponent } from './exp-tracker.component';

describe('ExpTrackerComponent', () => {
  let component: ExpTrackerComponent;
  let fixture: ComponentFixture<ExpTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
