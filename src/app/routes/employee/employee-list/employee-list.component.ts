import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from '@share/interfaces/employee';
import { ApiService } from '@share/services/api.service';
import { StateService } from '@share/services/state.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public pageSizeCount: number[] = [5, 10, 25, 100];
  public displayedColumns: string[] = ["userName", "firstName", "lastName", "email" ];
  public dataSource: MatTableDataSource<Employee>;
  
  constructor(
    private stateService: StateService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllEmployees().subscribe((res: Employee[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete() {
    const actionType: string = 'delete';
    this.stateService.openSnackBar(actionType);
  }

  onEdit() {
    const actionType: string = 'edit';
    this.stateService.openSnackBar(actionType);
  }

  onView(event: any) {
    this.router.navigate(["employee/" + event.id]);
  }

  onAdd() {
    this.router.navigate(["employee/" + "new"]);
  }

}
