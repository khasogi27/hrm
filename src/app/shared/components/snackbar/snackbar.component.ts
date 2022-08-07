import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: '',
  template: '',
  styles: []
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(actionType: string) {
    if (actionType == 'delete') {
      this.openDeleteBar();
    } else if (actionType == 'edit') {
      this.openEditBar()
    }
  }

  openDeleteBar() {
    const message = 'Delete success';
    const action = 'Close';
    let option = {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-warn']
    }
    this.snackBar.open(message, action, option);
  }

  openEditBar() {
    const message = 'Edit success';
    const action = 'Close';
    const option = {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-accent']
    }
    this.snackBar.open(message, action, option);
  }

}
