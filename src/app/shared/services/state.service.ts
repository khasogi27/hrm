import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@share/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class StateService extends SnackbarComponent {

  constructor(snackBar: MatSnackBar) {
    super(snackBar);
  }
}
