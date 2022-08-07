import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SharedModule } from '@share/shared.module';

const COMPONENTS: any[] = [
  EmployeeListComponent,
  EmployeeDetailComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
