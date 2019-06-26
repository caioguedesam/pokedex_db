import { PipesModule } from './../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonEvolutionsComponent } from './pokemon-evolutions/pokemon-evolutions.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
  ],
  declarations: [
    PokemonItemComponent,
    PokemonTypeComponent,
    PokemonEvolutionsComponent,
    LoadingComponent,
  ],
  exports: [
    PokemonItemComponent,
    PokemonTypeComponent,
    PokemonEvolutionsComponent,
    LoadingComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class ComponentsModule { }
