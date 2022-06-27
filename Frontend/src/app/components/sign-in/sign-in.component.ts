import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service'
import Swal from 'sweetalert2';
import { UserLogin } from 'src/app/models/UserLogin';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i


  constructor(private fb: FormBuilder, private router: Router, private _service:LoginService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  entrega: any
  users: any[] = []

  signIn() {
    const LOGIN:UserLogin = {
      email: this.signInForm.get('email')?.value,
      password: this.signInForm.get('password')?.value,
    }

    this._service.autenticarse(LOGIN).subscribe(data => {
      console.log(data);
      
      Swal.fire({
        icon: 'success',
        title: `Hola ${data.nombre}`,
        text: 'Bienvenido de nuevo !',
        timer: 3000
      })
      localStorage.setItem('currentUser',data.nombre)
      this.router.navigate(['/inicio'])
    }, error => {
      console.log(error.error)
      Swal.fire({
        icon: 'error',
        title: 'Opss...',
        text: error.error.mensaje,
        timer: 5000
      })
    })


  }


}
