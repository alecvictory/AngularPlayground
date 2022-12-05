import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@itt-components/home';
import { TodoComponent } from '@itt-components/todo';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
