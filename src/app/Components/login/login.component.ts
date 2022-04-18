import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private formbuilder:FormBuilder,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {

    if(this.loginForm.invalid){
      
      console.log("invalid data");
    }
    else{
      console.log(" login Successfull");
      let data={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password


      }
      this.userservice.login(data).subscribe((res:any)=> {
        console.log(res);
        localStorage.setItem('token', res.data);
        this.router.navigateByUrl("/dashboard/getallnotes");
      })
      
    }

  }


}