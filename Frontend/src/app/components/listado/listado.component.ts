import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListarPeliculasService } from 'src/app/services/listar-peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  Onemovie: any = []
  recoger: any = []
  movies: any[] = []
  imageUrl = 'https://image.tmdb.org/t/p/w500/'
  @ViewChild('nombre') nombre?: ElementRef

  constructor(private trendingMovies: ListarPeliculasService, private _servicio: ListarPeliculasService) { }

  /* renderTrendingMovies(){
    this.trendingMovies.getTrendingMovies().subscribe(results => {
      console.log(results); 
    })
  } */


  buscando() {
    const input2: any = this.nombre?.nativeElement;
    console.log(input2)
    const guardandoNombre = input2.value
    localStorage.setItem('NombrePeli', JSON.stringify(guardandoNombre))
    this._servicio.buscador().subscribe(data => {
      console.log(data.results[0])
      const objData = {
        poster: data.results[0].poster_path,
        title: data.results[0].original_title,
        name: data.results[0].original_name,
        overview: data.results[0].overview,
        id: data.results[0].id
      }
      this.Onemovie = [objData]

      console.log(this.Onemovie)
    }, error => {
      console.log(error)
    })

  }
  agregando(obj: any) {
    const objData = {
      poster: obj.poster,
      title: obj.title,
      name: obj.name,
      overview: obj.overview,
      id: obj.id
    }
    let recogiendo: any = localStorage.getItem('control-peliculas')
    recogiendo = JSON.parse(recogiendo)
    let carrito
    if (recogiendo == null) {
      carrito = []
    } else {
      carrito = recogiendo
    }
    carrito.push(objData)
    localStorage.setItem('control-peliculas', JSON.stringify(carrito))
    this.Onemovie = []
  }

  ngOnInit(): void {
    this.trendingMovies.getTrendingMovies().subscribe(results => {
      this.movies = results.results;
      console.log(this.movies);
    })
  }
  Consulta(id: any) {
    let guardandoP: any
    const nuevoArreglo = this.movies.filter((element: any) => element.id == id)
    const guardandoID = nuevoArreglo[0].id
    localStorage.setItem('idPelicula', JSON.stringify(guardandoID))
    this._servicio.consumiendo().subscribe(data => {
      if (data.results.CO.buy) {
        guardandoP = data.results.CO.buy[0]
        console.log(guardandoP)
      } else {
        guardandoP = data.results.CO.flatrate[0]
        console.log(guardandoP)
      }
      console.log(data.results.CO)

    }, error => {
      console.log(error)
    })
  }

}
