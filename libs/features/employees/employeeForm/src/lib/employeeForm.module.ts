import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './employeeForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [EmployeeFormComponent],
    imports: [FormsModule, ReactiveFormsModule],
    exports: [EmployeeFormComponent],
})
export class EmployeeFormModule {}
