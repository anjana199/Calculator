import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AdditionComponent} from './addition/addition.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import{ SubtractComponent} from './subtract/subtract.component';


const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"subtraction",component:SubtractComponent},
  {path:"login",component:SigninComponent},
  {path:"register",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
