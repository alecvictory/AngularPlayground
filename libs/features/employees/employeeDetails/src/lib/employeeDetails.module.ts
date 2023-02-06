import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeDetailsComponent } from './employeeDetails.component';

@NgModule({
    declarations: [EmployeeDetailsComponent],
    imports: [AgGridModule, BrowserModule],
    exports: [EmployeeDetailsComponent],
})
export class EmployeeDetailsModule {}
