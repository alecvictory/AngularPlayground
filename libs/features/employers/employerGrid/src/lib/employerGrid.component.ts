import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-employer',
    templateUrl: './employerGrid.component.html',
    styles: [],
})
export class EmployerGridComponent implements OnInit {
    employerDefs = [
        { field: 'companyName' },
        { field: 'numberOfEmployees' },
        { field: 'address' },
    ];

    employerDatas = [
        {
            companyName: 'In Time Tec',
            numberOfEmployees: '100',
            address: 'insert street name',
        },
        {
            companyName: 'Truckstop',
            numberOfEmployees: '500',
            address: 'insert street name',
        },
        {
            companyName: 'Zennify',
            numberOfEmployees: '50',
            address: 'insert random street name',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
