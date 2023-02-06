import { Component, OnInit } from '@angular/core';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { Employee } from 'libs/models/employee.model';
import { EMPLOYEES } from '../../../../../components/employee/mock-employees';

@Component({
    selector: 'lib-employee',
    templateUrl: './employeeGrid.component.html',
    styles: [],
})
export class EmployeeGridComponent implements OnInit {
    employees: Employee[] = EMPLOYEES;

    frameworkComponents: any;

    constructor() {
        this.frameworkComponents = {
            buttonRenderer: ButtonRendererComponent,
        };
    }
    rowDataClicked1 = {};

    employeeGridDefs = [
        {
            field: 'details ',
            cellRenderer: 'buttonRenderer',
            cellRendererParams: {
                onClick: this.onBtnClick1.bind(this),
                label: 'Details',
            },
        },
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'email' },
        { field: 'phone' },
        { field: 'department' },
        { field: 'position' },
        { field: 'salary' },
    ];

    employeeGridDatas = [
        {
            details: 'Details',
            firstName: 'Alec',
            lastName: 'Victory',
            email: 'alecvictory@intimetec.com',
            phone: '208-555-555',
            department: 'Engineering',
            position: 'Software Engineer',
            salary: '$100,000',
        },
        {
            details: 'Details',
            firstName: 'Trevor',
            lastName: 'Allen',
            email: 'trevorallen@intimetec.com',
            phone: '208-555-554',
            department: 'Engineering',
            position: 'Software Engineer',
            salary: '$100,000',
        },
        {
            details: 'Details',
            firstName: 'Collin',
            lastName: 'Miller',
            email: 'CollinMiller@intimetec.com',
            phone: '208-555-553',
            department: 'Engineering',
            position: 'Senior Software Engineer',
            salary: '$200,000',
        },
    ];
    onBtnClick1(e: any) {
        this.rowDataClicked1 = e.rowData;
    }
    ngOnInit(): void {}
    onRowClicked() {
        console.log('it worked');
    }
}
