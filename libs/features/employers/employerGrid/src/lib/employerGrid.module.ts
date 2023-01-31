import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { EmployerGridComponent } from './employerGrid.component';

@NgModule({
    declarations: [EmployerGridComponent],
    imports: [AgGridModule, BrowserModule],
    exports: [EmployerGridComponent],
})
export class EmployerModule {}
