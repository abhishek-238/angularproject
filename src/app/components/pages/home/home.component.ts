import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = "This is my home page"
    message = "welcome"
    countries:string[]
    employees:Array<Employee>=[];
    style1 =  {'color':'#fff','background':'green'};
    style2 =  {'color':'red','background':'blue'};
    obj1 = {'bg-success':true,'text-danger':true};
    obj2 = {'bg-danger':true,'text-info':true};
    day = new Date().getDay()

  constructor() {
    this.countries=["india","russia","china","nepal"]
    console.log(this.employees);

   }

   loadEmployees(){
    this.employees = [
      {'id':1,'name':'abhi','gender':1,'salary':13000,'dob':new Date('1997-08-19')},
      {'id':2,'name':'mahi','gender':0,'salary':18000,'dob':new Date('1998-07-18')},
      {'id':3,'name':'surbhi','gender':0,'salary':16000,'dob':new Date('1995-05-19')},
      {'id':4,'name':'abhinesh','gender':1,'salary':11000,'dob':new Date('1997-04-13')},
      {'id':5,'name':'boni','gender':0,'salary':12000,'dob':new Date('1997-10-29')}

    ]
   }

  ngOnInit(): void {
  }

}
export interface Employee{
  id:number;
  name:string;
  gender:number;
  salary:number;
  dob:any;
}
