import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByQualificationComponent } from './employee-by-qualification.component';

describe('EmployeeByQualificationComponent', () => {
  let component: EmployeeByQualificationComponent;
  let fixture: ComponentFixture<EmployeeByQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeByQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
