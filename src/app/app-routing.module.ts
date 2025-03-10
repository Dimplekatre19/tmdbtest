import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovietableComponent } from './components/movietable/movietable.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path:'',
    component:MovietableComponent
  },
  {
    path:'movies',
    component:MovietableComponent
  },
  {
    path:'movies/:id',
    component:MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
