import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-employee',
    templateUrl: './employee.component.html',
    styles: [],
})
export class EmployeeComponent implements OnInit {
    employeeDefs = [
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'email' },
        { field: 'phone' },
        { field: 'department' },
        { field: 'position' },
        { field: 'salary' },
    ];

    employeeDatas = [
        {
            firstName: 'Alec',
            lastName: 'Victory',
            email: 'alecvictory@intimetec.com',
            phone: '208-555-555',
            department: 'Engineering',
            position: 'Software Engineer',
            salary: '$100,000',
        },
        {
            firstName: 'Trevor',
            lastName: 'Allen',
            email: 'trevorallen@intimetec.com',
            phone: '208-555-554',
            department: 'Engineering',
            position: 'Software Engineer',
            salary: '$100,000',
        },
        {
            firstName: 'Collin',
            lastName: 'Miller',
            email: 'CollinMiller@intimetec.com',
            phone: '208-555-553',
            department: 'Engineering',
            position: 'Senior Software Engineer',
            salary: '$200,000',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
