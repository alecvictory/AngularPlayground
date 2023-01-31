import { TestBed } from '@angular/core/testing';

import { EmployeeFormService } from './employeeForm.service';

describe('EmployeeFormService', () => {
    let service: EmployeeFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
