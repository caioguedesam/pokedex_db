import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonQueriesComponent } from './pokemon-queries.component';

describe('PokemonQueriesComponent', () => {
  let component: PokemonQueriesComponent;
  let fixture: ComponentFixture<PokemonQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
