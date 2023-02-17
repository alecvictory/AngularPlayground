import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYERS } from '@itt-components/employerConst';

@Component({
    selector: 'lib-employerDetails',
    templateUrl: './employerDetails.component.html',
    styles: [],
})
export class EmployerDetailsComponent implements OnInit {
    name = '';
    numberOfEmployees = '';
    address = '';

    constructor(public activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params.id;
        const employerById = EMPLOYERS[id - 1];
        this.name = employerById.name;
        this.numberOfEmployees = employerById.numberOfEmployees;
        this.address = employerById.address;
    }
}
