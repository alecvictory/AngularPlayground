import { Component, OnInit } from '@angular/core';
import { ButtonRendererComponent } from '../../../../employees/employeeGrid/src/lib/renderer/button-renderer.component';
import { Employer } from 'libs/models/employer.model';
import { Router } from '@angular/router';
import { EMPLOYERS } from '@itt-components/employerConst';

@Component({
    selector: 'lib-employer',
    templateUrl: './employerGrid.component.html',
    styles: [],
})
export class EmployerGridComponent implements OnInit {
    employers: Employer[] = EMPLOYERS;
    api: any;

    frameworkComponents: any;

    employerDefs = [
        {
            field: 'details ',
            cellRenderer: 'buttonRenderer',
            cellRendererParams: {
                label: 'Details',
            },
        },
        { field: 'name' },
        { field: 'numberOfEmployees' },
        { field: 'address' },
    ];

    employerDatas = EMPLOYERS;

    constructor(public router: Router) {
        this.frameworkComponents = {
            buttonRenderer: ButtonRendererComponent,
        };
    }

    ngOnInit(): void {}

    onRowClicked() {
        this.router.navigate([
            'employerDetails',
            this.api.getSelectedRows()[0].id,
        ]);
    }

    onGridReady(event: { api: any }) {
        this.api = event.api;
    }
}
