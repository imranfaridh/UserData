import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginArray : Array<any> = [];

  userEmail!:string;
  userPassword!:string;


  constructor(private loginService : UserService, private router : Router) {
    this.getuser()
  }


  getuser(){
    this.loginService.getUserService().subscribe((data)=>{
      console.log(data);
      this.loginArray=data;
    })
  }

  loginBtn(){
    for(let user=0; user<=this.loginArray.length-1; user++){
      if(this.userEmail==this.loginArray[user].email && this.userPassword== this.loginArray[user].password){
        console.log(this.userEmail);
        console.log(this.userPassword);

        this.router.navigate(['/home']);
        break;
      }
      else{
        console.log('Invalid');
        
      }
    }
  }
}
