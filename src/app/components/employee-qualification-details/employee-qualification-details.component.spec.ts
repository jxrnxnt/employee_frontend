import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQualificationDetailsComponent } from './employee-qualification-details.component';

describe('EmployeeQualificationDetailsComponent', () => {
  let component: EmployeeQualificationDetailsComponent;
  let fixture: ComponentFixture<EmployeeQualificationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeQualificationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQualificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
