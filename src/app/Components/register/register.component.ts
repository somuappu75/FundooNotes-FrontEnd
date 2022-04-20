import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide :boolean =true;

  constructor(private fb:FormBuilder,private userservice:UserService) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      Email: ['', Validators.required],
      password: ['', Validators.required],
      Confirm: ['', [Validators.required, Validators.minLength(6)]],
  })
}
onSubmit() {
  console.log("inside submit", this.registerForm.value);
  if(this.registerForm.invalid){
    
    console.log("invalid data");
  }
  else{
    console.log("u have entered valid data");
    let data={
      FirstName:this.registerForm.value.firstname,
      LastName:this.registerForm.value.lastname,
      Email:this.registerForm.value.email,
      Password:this.registerForm.value.password


    }
    this.userservice.register(data).subscribe((res:any)=> {
      console.log(res);
    })
      
  }

}
passswordhide() {
  this.hide = !this.hide;
}
}
