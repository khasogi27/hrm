import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

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

const COMPONENTS: any[] = [
  SnackbarComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
