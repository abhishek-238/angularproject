import { Component, OnInit } from '@angular/core';
import { EmployeesList } from './employeerecord';
import { ActivatedRoute } from '@angular/router';
import { EmployeesComponent } from '../components/pages/employees/employees.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
Employees=EmployeesList
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(param=>{
      console.log(param);
      const id = param["id"];
      if(id!=undefined)
      this.Employees=EmployeesList.filter(e=>e.deptid==id);
    })
  }

}
