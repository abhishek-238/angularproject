import { Component, OnInit } from '@angular/core';
import { EmployeesList } from './employeerecord';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
Employees=EmployeesList
  constructor() { }

  ngOnInit(): void {
  }

}
