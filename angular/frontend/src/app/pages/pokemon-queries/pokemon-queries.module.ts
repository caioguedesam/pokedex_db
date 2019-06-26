import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonQueriesRoutingModule } from './pokemon-queries-routing.module';
import { PokemonQueriesComponent } from './pokemon-queries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    PokemonQueriesComponent,
  ],
  imports: [
    CommonModule,
    PokemonQueriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
    HighlightModule,
  ]
})
export class PokemonQueriesModule { }
