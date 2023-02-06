import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '@itt-components/employeeDetails';

const routes: Routes = [
    {
        path: 'employeeDetails',
        component: EmployeeDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ButtonModule {}
