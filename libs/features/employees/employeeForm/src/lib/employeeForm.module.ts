import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './employeeForm.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [EmployeeFormComponent],
    imports: [FormsModule],
    exports: [EmployeeFormComponent],
})
export class EmployeeFormModule {}
