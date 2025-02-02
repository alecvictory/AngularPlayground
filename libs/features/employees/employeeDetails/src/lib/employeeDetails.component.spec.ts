import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employeeDetails.component';

describe('EmployeeDetailsComponent', () => {
    let component: EmployeeDetailsComponent;
    let fixture: ComponentFixture<EmployeeDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmployeeDetailsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
