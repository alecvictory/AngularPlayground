import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@itt-components/home';
import { EmployerGridComponent } from '@itt-components/employerGrid';
import { EmployeeGridComponent } from '@itt-components/employeeGrid';
import { EmployeeDetailsComponent } from '@itt-components/employeeDetails';
import { EmployeeFormComponent } from '@itt-components/employeeForm';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'employerGrid',
        component: EmployerGridComponent,
    },
    {
        path: 'employeeDetails',
        component: EmployeeDetailsComponent,
    },
    {
        path: 'employeeForm',
        component: EmployeeFormComponent,
    },
    {
        path: 'employeeGrid',
        component: EmployeeGridComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
