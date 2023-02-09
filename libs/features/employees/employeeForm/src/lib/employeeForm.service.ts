import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'libs/models/employee.model';
import { EMPLOYEES } from '../../../../../components/employee/mock-employees';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class EmployeeFormService {
    private apiUrl = 'http://localhost:5000/employees';
    constructor(private http: HttpClient) {}

    addEmployee(employee: Employee) {}
}
