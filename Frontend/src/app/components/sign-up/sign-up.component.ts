import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  signUpForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private _servicio: LoginService) {
    this.signUpForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      password: ['', Validators.required]
    })
  }

  // ----------------------------------------------------------------------------------Funcion para crear el usuario

  signUp() {
    const USER: User = {
      nombre: this.signUpForm.get('nombre')?.value,
      generoFavorito: this.signUpForm.get('genero')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    }

    this._servicio.crearContacto(USER).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: `Hola ${USER.nombre} !`,
        text: 'Guarda y disfruta de tus peliculas favoritas !',
        timer: 3000
      })
      this.router.navigate(['/inicio'])
    }, error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Opss...',
        text: `Hola ${USER.nombre} ! Parece que tu correo ya esta registrado. Por favor inicia sesión para continuar !`,
        timer: 5000
      })
    })
  }


  ngOnInit(): void {
  }

}
