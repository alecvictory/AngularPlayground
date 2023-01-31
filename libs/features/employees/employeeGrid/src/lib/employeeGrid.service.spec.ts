import { TestBed } from '@angular/core/testing';

import { EmployeeGridService } from './employeeGrid.service';

describe('EmployeeService', () => {
    let service: EmployeeGridService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeGridService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
