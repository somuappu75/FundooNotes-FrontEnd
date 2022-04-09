import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private fb:FormBuilder,private userservice:UserService ) { }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    console.log("inside submit", this.loginForm.value);
    if(this.loginForm.invalid){
      
      console.log("invalid data");
    }
    else{
      console.log("u have entered valid data");
      let data={
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password


      }
      this.userservice.login(data).subscribe((res:any)=> {
        console.log(res);
        
      })
      
    }

  }


}