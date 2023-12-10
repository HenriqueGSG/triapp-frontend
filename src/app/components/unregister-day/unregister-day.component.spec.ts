import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterDayComponent } from './unregister-day.component';

describe('UnregisterDayComponent', () => {
  let component: UnregisterDayComponent;
  let fixture: ComponentFixture<UnregisterDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnregisterDayComponent]
    });
    fixture = TestBed.createComponent(UnregisterDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
