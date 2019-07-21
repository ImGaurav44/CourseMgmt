import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService, private r:Router) { }

  ngOnInit() {
  }

  logout()
  {
    // this.auth.logout().then(response => {console.log('Logout Successfully',response)},
    //         error => {console.log("Erro occur",error)}

    this.auth.logout().then(response =>
      {
        alert("Logout Successfully!!!")
        this.r.navigate(['login']);
      },
     error => {
          console.log(error);
      }
    )
  }

}
