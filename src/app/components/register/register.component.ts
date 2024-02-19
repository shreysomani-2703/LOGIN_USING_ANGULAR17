import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=this.fb.group({
    fullname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmpassword:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder){ }
  get fullname(){
    return this.registerForm.controls['fullname']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password'];  
  }
  get confirmpassword(){
    return this.registerForm.controls['confirmpassword'];  
  }
}
