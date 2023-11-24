import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../service/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:User= {
    UserName:"",
    UserEmail:"",
    UserMobileNumber :0,
    UserPassword:"",
    UserRepeatPassword :""
 }

  homeArray:Array<any>=[];

  constructor(private homeService:UserService,private fb: FormBuilder){
  this.getUser();
 
  }

  getUser(){
    this.homeService.getUserService().subscribe((data)=>{
this.homeArray=data;
    })
  }
  create(){
    this.homeService.createUserService(this.user).subscribe((data)=>{
      console.log(data);
      this.getUser();
      this.user.UserName="",
      this.user.UserEmail="",
      this.user.UserMobileNumber=0,
      this.user.UserPassword="",
      this.user.UserRepeatPassword=""
    })
  }

  edit(i:number){
    this.homeService.updateService(i,this.user).subscribe((data)=>{
      console.log(data);
      this.getUser();
      
    })}
    
    remove(i:number){
    this.homeService.deleteService(i).subscribe((data)=>{
      console.log("deleted !");
      this.getUser();
    })
    }
}
