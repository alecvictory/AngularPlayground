import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '@itt-components/employeeDetails';
import { Employee } from 'libs/models/employee.model';
import { EmployeeFormService } from './employeeForm.service';

@Component({
    selector: 'lib-employeeForm',
    templateUrl: './employeeForm.component.html',
    styles: [],
})
export class EmployeeFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
