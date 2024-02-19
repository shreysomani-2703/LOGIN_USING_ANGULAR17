import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { passwordMatchValidator } from '../../SHARED/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
  },
  {
    validators:passwordMatchValidator
  }
  )
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private messageService: MessageService,
    private router:Router
    ){ }
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

  submitDetails(){
    const postData = {...this.registerForm.value};
    delete postData.confirmpassword;
    console.log(this.registerForm.value);
    this.authService.registerUser(postData as User).subscribe(
      response =>{
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successful' });
        this.router.navigate(['login']);
        
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something is wrong' });
      }//console.log(error)
    )
  }
}
