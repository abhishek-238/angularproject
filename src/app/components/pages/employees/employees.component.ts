import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
Departments:Array<Department>=[];
  constructor() {
    this.Departments=[
      {"id":1,"name":"IT"},
      {"id":2,"name":"ACCOUNTS"},
      {"id":3,"name":"SALES"},
      {"id":4,"name":"ADMIN"},
      {"id":5,"name":"HR"},

    ]
  }

  ngOnInit(): void {
  }

}
export interface Department{
  id:number;
  name:string;
}
