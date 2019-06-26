import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonQueriesComponent } from './pokemon-queries.component';

const routes: Routes = [{
  path: '',
  component: PokemonQueriesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonQueriesRoutingModule { }
