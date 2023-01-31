import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeGridComponent } from './employeeGrid.component';

@NgModule({
    declarations: [EmployeeGridComponent],
    imports: [AgGridModule, BrowserModule],
    exports: [EmployeeGridComponent],
})
export class EmployeeModule {}
