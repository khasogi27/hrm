import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from '@share/interfaces/employee';
import { StateService } from '@share/services/state.service';
import { StoreService } from '@share/services/store.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public pageSizeCount: number[] = [5, 10, 25, 100];
  public displayedColumns: string[] = ["username", "firstName", "lastName", "email" ];
  public dataSource: MatTableDataSource<Employee>;
  
  constructor(
    private storeService: StoreService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.storeService.getDataStore());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete() {
    let actionType: string = 'delete';
    this.stateService.openSnackBar(actionType);
  }

  onEdit() {
    let actionType: string = 'edit';
    this.stateService.openSnackBar(actionType);
  }

  onView(event: any) {
    this.router.navigate(["employee/" + event.id]);
  }

  onAdd() {
    this.router.navigate(["employee/" + "new"]);
  }

}
