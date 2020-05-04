import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatTabsModule} from '@angular/material/tabs';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AdminComponent } from './components/admin/admin.component';
import { CalculateEmiComponent } from './components/calculate-emi/calculate-emi.component';
import { CreditBalanceComponent } from './components/credit-balance/credit-balance.component';
import { PayEmiComponent } from './components/pay-emi/pay-emi.component';
import { ForecloseLoanComponent } from './components/foreclose-loan/foreclose-loan.component';
import { PrintTransactionComponent } from './components/print-transaction/print-transaction.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanService } from './services/loan.service';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FacilitiesComponent,
    AdminComponent,
    CalculateEmiComponent,
    CreditBalanceComponent,
    PayEmiComponent,
    ForecloseLoanComponent,
    PrintTransactionComponent,
    ApplyLoanComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
