import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '@share/services/store.service';
import * as _moment from 'moment';
import { DATE_FORMATS } from 'src/app/material.module';
const moment = _moment;

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class EmployeeDetailComponent implements OnInit {
  public employeeStatus: string;
  public employeeId: any = {};
  public form: FormGroup;
  public date = moment();
  public dsGroup: string[] = [ "group 1", "group 2", "group 3", "group 4", "group 5" ];
  public isEdit: boolean = false;
  public isReadonly: boolean = true;

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
  }

  getDetailEmployee() {
    this.route.paramMap.subscribe(param => {
      if (param.get('id') == "new") {
        this.employeeStatus = "Add";
        this.isReadonly = false;
        return;
      }

      this.employeeStatus = "View";
      this.isEdit = true;
      this.employeeId.id = Number(param.get('id'));
      this.storeService.getDataStore().filter((e: any) => {
        if (e.id == this.employeeId.id) {
          let dateConvert = this.formatDate(e.birthDate);
          e.birthDate = dateConvert;
          let currenConvert = this.formatCurrency(e.basicSalary);
          e.basicSalary = currenConvert;
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

  formatDate(args: any) {
    let resDate = moment(args.split('-').map(Number).reverse());
    return resDate;
  }

  addDatePicker(type: string, event: any) {
    this.date = moment(event.value);
    console.log(this.date.format('DD-MM-YYYY'), 'date');
  }

  onBack() {
    this.router.navigate(["employee"]);
  }

  onSave() {

  }

  compareFunction(o1: any, o2: any) {
    return o1 == o2;
  }

}
