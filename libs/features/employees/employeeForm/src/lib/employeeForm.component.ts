import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'libs/models/employee.model';

@Component({
    selector: 'lib-employeeForm',
    templateUrl: './employeeForm.component.html',
    styles: [],
})
export class EmployeeFormComponent implements OnInit {
    @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    salary: string;
    department: string;
    position: string;

    constructor() {}

    ngOnInit(): void {}

    onSubmit() {
        const newEmployee = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            salary: this.salary,
            department: this.department,
            position: this.position,
        };

        this.onAddEmployee.emit(newEmployee);

        (this.firstName = ''),
            (this.lastName = ''),
            (this.email = ''),
            (this.phone = ''),
            (this.salary = ''),
            (this.department = ''),
            (this.position = '');
    }
}
