import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { EmployerComponent } from './employer.component';

@NgModule({
    declarations: [EmployerComponent],
    imports: [AgGridModule, BrowserModule],
    exports: [EmployerComponent],
})
export class EmployerModule {}
