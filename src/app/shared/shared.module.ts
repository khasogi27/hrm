import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule.withConfig({
    warnOnNgModelWithFormControl: 'never'
  })
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule { }
