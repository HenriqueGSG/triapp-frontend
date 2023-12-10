import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDayComponent } from './register-day.component';

describe('RegisterDayComponent', () => {
  let component: RegisterDayComponent;
  let fixture: ComponentFixture<RegisterDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDayComponent]
    });
    fixture = TestBed.createComponent(RegisterDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
