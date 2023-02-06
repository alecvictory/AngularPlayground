import { Component, OnInit } from '@angular/core';
import { Employee } from 'libs/models/employee.model';
import { EMPLOYEES } from '../../../../../components/employee/mock-employees';

@Component({
    selector: 'lib-employeeDetails',
    templateUrl: './employeeDetails.component.html',
    styles: [],
})
export class EmployeeDetailsComponent implements OnInit {
    firstName = 'Alec';
    lastName = 'Victory';
    email = 'alecvictory@intimetec.com';
    phone = '208-555-555';
    department = 'Engineering';
    position = 'Software Engineer';
    salary = '$100,000';

    constructor() {}

    ngOnInit(): void {}
}
