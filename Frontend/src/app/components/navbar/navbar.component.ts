import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  entrega:any
  user:any



  constructor(private router: Router) {}

  cerrarSesion() {
    this.router.navigate(['/'])
    localStorage.removeItem('currentUser')
  }

  ngOnInit(): void {
   let entrega:any = localStorage.getItem('currentUser');
  this.user=entrega
  }

}
