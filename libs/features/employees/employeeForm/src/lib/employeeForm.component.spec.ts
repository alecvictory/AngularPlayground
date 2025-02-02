import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormComponent } from './employeeForm.component';

describe('EmployeeFormComponent', () => {
    let component: EmployeeFormComponent;
    let fixture: ComponentFixture<EmployeeFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmployeeFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
