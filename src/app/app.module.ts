import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ChangebgDirective } from './tool/utils/changebg.directive';
import { FormatgenderPipe } from './tool/utils/formatgender.pipe';
import { FormatnamePipe } from './tool/utils/formatname.pipe';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EmployeesComponent } from './components/pages/employees/employees.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChangebgDirective,
    FormatgenderPipe,
    FormatnamePipe,
    AboutComponent,
    ContactComponent,
    EmployeesComponent,
    ServicesComponent,
    PagenotfoundComponent,
    TicketBookingComponent,
    MobileRechargeComponent,
    PaymentTransferComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
