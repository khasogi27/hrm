import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { MainAuthComponent } from './layout/main-auth/main-auth.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
      },
      {
        path: 'employee',
        loadChildren: () => import("./routes/employee/employee.module").then(m => m.EmployeeModule)
      }
    ]
  },
  {
    path: 'auth',
    component: MainAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./routes/sessions/sessions.module").then(m => m.SessionsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
