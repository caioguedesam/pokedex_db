import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from 'src/app/pages/pokemon-detail/pokemon-detail.component';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    ChartsModule,
    ComponentsModule,
  ]
})
export class PokemonDetailModule { }
