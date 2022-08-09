import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public form: FormGroup;
  public isEdit: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private builder: FormBuilder
  ) { 
    this.form = this.builder.group({
      id: [""],
      username: [""],
      firstName: [""],
      lastName: [""],
      email: [""],
      birthDate: [""],
      basicSalary: [""],
      status: [""],
      group: [""],
      description: [""],
    });
  }

  ngOnInit(): void {
    this.getDetailEmployee();
    console.log(this.employeeDetail, 'detail');
  }

  getDetailEmployee() {
    this.route.paramMap.subscribe(param => {
      if (param.get('id') == "new") {
        this.employeeStatus = "Add";
        return;
      }
      this.employeeStatus = "View";
      this.isEdit = true;
      this.employeeId.id = Number(param.get('id'));
      this.storeService.getDataStore().filter((e: any) => {
        if (e.id == this.employeeId.id) {
          let numToString = e.basicSalary.toString();
          numToString = this.formatCurrency(e.basicSalary)
          e.basicSalary = numToString;
          this.form.patchValue(e);
          return;
        }
      });
    });
  }

  formatCurrency(args: number) {
    let resNum: string;
    resNum = new Intl.NumberFormat(['ban', 'id']).format(args)
    return 'Rp. ' + resNum;
  }

  onBack() {
    this.router.navigate(["employee"]);
  }

  onSave() {

  }

}
