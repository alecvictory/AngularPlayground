import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from 'libs/models/employee.model';

@Component({
    selector: 'lib-employeeForm',
    templateUrl: './employeeForm.component.html',
    styles: [],
})
export class EmployeeFormComponent implements OnInit {
    title = 'EmployeeForms';

    public employeeForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.employeeForm = new FormGroup({
            firstName: new FormControl(null),
            lastName: new FormControl(null),
            email: new FormControl(null),
            phone: new FormControl(null),
            salary: new FormControl(null),
            department: new FormControl(null),
            position: new FormControl(null),
        });
    }
}
