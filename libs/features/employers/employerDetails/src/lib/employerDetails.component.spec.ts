import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDetailsComponent } from './employerDetails.component';

describe('EmployerDetailsComponent', () => {
    let component: EmployerDetailsComponent;
    let fixture: ComponentFixture<EmployerDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmployerDetailsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployerDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
