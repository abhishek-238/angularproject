import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EmployeesComponent } from './components/pages/employees/employees.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'services',component:ServicesComponent,children:[
    {path:'',component:TicketBookingComponent},
    {path:'Ticket-booking',component:TicketBookingComponent},
    {path:'Mobile-recharge',component:MobileRechargeComponent},
    {path:'Payment-transfer',component:PaymentTransferComponent}
  ]},

  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
