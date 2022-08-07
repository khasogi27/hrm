import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetail } from '@share/interfaces/employee';
import { StoreService } from '@share/services/store.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public employeeStatus: string;
  public employeeId: any = {};
  public employeeDetail: EmployeeDetail;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getDetailEmployee();
    console.log(this.employeeDetail, 'detail');
  }

  getDetailEmployee() {
    this.route.paramMap.subscribe(param => {
      this.employeeId.id = Number(param.get('id'));
      if (this.employeeId.id) this.employeeStatus = "Edit";
      this.storeService.getDataStore().filter((e: EmployeeDetail) => {
        if (e.id == this.employeeId.id) {
          this.employeeDetail = e;
          return;
        }
      })
    });
  }

  onBack() {
    this.router.navigate(["employee"]);
  }

  onSave() {

  }

}
