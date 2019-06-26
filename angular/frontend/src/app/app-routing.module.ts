import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon-list',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-list',
    loadChildren: './pages/pokemon-list/pokemon-list.module#PokemonListModule'
  },
  {
    path: 'pokemon-queries',
    loadChildren: './pages/pokemon-queries/pokemon-queries.module#PokemonQueriesModule'
  },
  {
    path: 'pokemon-detail/:id',
    loadChildren: './pages/pokemon-detail/pokemon-detail.module#PokemonDetailModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
