import { Component, OnInit } from '@angular/core';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { Employee } from 'libs/models/employee.model';
import { Router } from '@angular/router';
import { EMPLOYEES } from '@itt-components/employeeConst';

@Component({
    selector: 'lib-employee',
    templateUrl: './employeeGrid.component.html',
    styles: [],
})
export class EmployeeGridComponent implements OnInit {
    employees: Employee[] = EMPLOYEES;
    api: any;

    frameworkComponents: any;

    constructor(public router: Router) {
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

    employeeGridDatas = EMPLOYEES;

    ngOnInit(): void {}

    onRowClicked() {
        this.router.navigate([
            'employeeDetails',
            this.api.getSelectedRows()[0].id,
        ]);
    }

    onGridReady(event: { api: any }) {
        this.api = event.api;
    }
}
