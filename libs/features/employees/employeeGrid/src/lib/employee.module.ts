import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponent } from './employee.component';

@NgModule({
    declarations: [EmployeeComponent],
    imports: [AgGridModule, BrowserModule],
    exports: [EmployeeComponent],
})
export class EmployeeModule {}
