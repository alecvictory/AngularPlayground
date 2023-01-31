import { TestBed } from '@angular/core/testing';

import { EmployerFormService } from './employerForm.service';

describe('EmployerFormService', () => {
    let service: EmployerFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployerFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
