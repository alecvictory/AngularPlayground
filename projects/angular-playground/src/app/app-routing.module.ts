import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@itt-components/home';
import { TodoComponent } from '@itt-components/todo';
import { EmployerComponent } from '@itt-components/employer';
import { EmployeeComponent } from '@itt-components/employee';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'todo',
        component: TodoComponent,
    },
    {
        path: 'employer',
        component: EmployerComponent,
    },
    {
        path: 'employee',
        component: EmployeeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
