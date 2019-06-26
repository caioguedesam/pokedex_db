import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFilterPipe } from './generic-filter/generic-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GenericFilterPipe,
  ],
  exports: [
    GenericFilterPipe,
  ],
})
export class PipesModule { }
