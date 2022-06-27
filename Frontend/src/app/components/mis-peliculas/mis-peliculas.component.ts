import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mis-peliculas',
  templateUrl: './mis-peliculas.component.html',
  styleUrls: ['./mis-peliculas.component.css']
})
export class MisPeliculasComponent implements OnInit {

  carga: any = []

  imageUrl = 'https://image.tmdb.org/t/p/w500/'
  wht = 'https://wa.me/?texto=Quisiera%20compartir%20contigo%20esta%20superpelicula:%20`'

  constructor() { }

  eliminando(id: any) {
    const nuevoArreglo: any = this.carga.filter((element: any) => element.id !== id)

    localStorage.setItem('control-peliculas', JSON.stringify(nuevoArreglo))
    this.carga = localStorage.getItem('control-peliculas')
    //let cargando: any = localStorage.getItem('control-peliculas')
    this.carga = JSON.parse(this.carga)
  }


  ngOnInit(): void {

    this.carga = localStorage.getItem('control-peliculas')
    this.carga = JSON.parse(this.carga)

    //let cargando: any = localStorage.getItem('control-peliculas')

  }

}
