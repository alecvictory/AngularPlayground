import { TestBed } from '@angular/core/testing';

import { EmployerGridService } from './employerGrid.service';

describe('EmployerService', () => {
    let service: EmployerGridService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployerGridService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
