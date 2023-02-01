import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupform=new FormGroup(
    {
      "first_name":new FormControl(),
      "last_name": new FormControl(),
      "email": new FormControl("",[Validators.email]),
      "username": new FormControl("",[Validators.required]),
      "password": new FormControl("",[Validators.required])
    }
  )
  get email(){
    return this.signupform.get("email")
  }
  get username(){
    return this.signupform.get("username")
  }
  get password(){
    return this. signupform.get("password")
  }

  register(){
    console.log(this.signupform.value);
    
  }
}
