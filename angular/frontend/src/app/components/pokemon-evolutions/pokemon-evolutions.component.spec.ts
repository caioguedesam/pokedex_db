import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEvolutionsComponent } from './pokemon-evolutions.component';

describe('PokemonEvolutionsComponent', () => {
  let component: PokemonEvolutionsComponent;
  let fixture: ComponentFixture<PokemonEvolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEvolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
