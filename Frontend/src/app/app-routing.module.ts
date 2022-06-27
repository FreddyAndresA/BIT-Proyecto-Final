import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';
import { MisPeliculasComponent } from './components/mis-peliculas/mis-peliculas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: ListadoComponent },
  { path: 'mis-peliculas', component: MisPeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
