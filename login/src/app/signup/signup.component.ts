import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  usersArray : Array<any> = [];

  user:User={
    UserName:"",
    UserEmail:"",
    UserMobileNumber :0,
    UserPassword:"",
    UserRepeatPassword : ""
  }

  constructor(private userService : UserService,  private router:Router) {
    this.getuser();
  }

  getuser(){
     this.userService.getUserService().subscribe((data)=>{
      console.log(data);
      this.usersArray=data;
    })
  }

  postUser(){
     this.userService.createUserService(this.user).subscribe((data)=>{
      console.log(data);
      this.getuser;
      this.router.navigate(['/login'])
     })
  }

}
