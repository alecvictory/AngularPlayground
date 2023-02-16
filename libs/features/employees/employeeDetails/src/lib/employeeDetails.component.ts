import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from '@itt-components/employeeConst';

@Component({
    selector: 'lib-employeeDetails',
    templateUrl: './employeeDetails.component.html',
    styles: [],
})
export class EmployeeDetailsComponent implements OnInit {
    firstName = '';
    lastName = '';
    email = '';
    phone = '';
    department = '';
    position = '';
    salary = '';

    constructor(public activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params.id;
        const employeeById = EMPLOYEES[id - 1];
        this.firstName = employeeById.firstName;
        this.lastName = employeeById.lastName;
        this.email = employeeById.email;
        this.phone = employeeById.phone;
        this.department = employeeById.department;
        this.position = employeeById.position;
        this.salary = employeeById.salary;
    }
}
