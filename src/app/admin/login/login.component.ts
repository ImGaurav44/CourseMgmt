import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ="";
  password:string ="";

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login()
  {
    console.log(this.email,this.password);
   const param ={ email: this.email, password: this.password };
    this.auth.login(param)
                          .then(
                             
                              // response => { console.log('Login Successfully',response)},

                              response => { 
                                alert("Login Successfully!!!")
                                this.router.navigate(['course']);
                              },

                              error => console.log('Login error',error),
                              // this.router.navigate(['/courses'])
                                )
  }

  
  

}
