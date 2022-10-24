import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupCalenderComponent } from './sup-calender.component';

describe('SupCalenderComponent', () => {
  let component: SupCalenderComponent;
  let fixture: ComponentFixture<SupCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
