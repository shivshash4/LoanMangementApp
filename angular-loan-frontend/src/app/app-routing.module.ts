import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { CreditBalanceComponent } from './components/credit-balance/credit-balance.component';
import { CalculateEmiComponent } from './components/calculate-emi/calculate-emi.component';
import { ForecloseLoanComponent } from './components/foreclose-loan/foreclose-loan.component';
import { PayEmiComponent } from './components/pay-emi/pay-emi.component';
import { PrintTransactionComponent } from './components/print-transaction/print-transaction.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'facility',component:FacilitiesComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent},
  {path:'apply-loan', component:ApplyLoanComponent},
  {path:'credit-balance', component:CreditBalanceComponent},
  {path:'calculate-emi', component:CalculateEmiComponent},
  {path:'foreclose-loan', component:ForecloseLoanComponent},
  {path:'print-transaction', component:PrintTransactionComponent},
  {path:'pay-emi', component:PayEmiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
