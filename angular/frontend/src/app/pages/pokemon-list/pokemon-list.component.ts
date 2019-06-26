import { Component, OnInit } from '@angular/core';
import { WrapperService } from 'src/app/services/wrapper/wrapper.service';
import { PokemonType } from 'src/app/models/pokemon';
import { uniqBy } from 'ramda';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public searchContent: string = '';
  public isLoading: boolean = true;
  public pokemonList: PokemonType[] = [];

  constructor(
    private wrapperService: WrapperService,
  ) { }

  private unique(pokemonList: PokemonType[]) {
    const newList: PokemonType[] = [];

    pokemonList.forEach((pokemon) => {
      const copy = pokemon;
      const { id_pokemon } = copy;
      const filteredList = pokemonList.filter(pokemonItem => pokemonItem.id_pokemon === id_pokemon);
      copy.types = [];
      filteredList.forEach((pokemonFiltered) => {
        copy.types.push(pokemonFiltered.tipo);
      });
      newList.push(copy);
    });
    const uniqueList = uniqBy(item => item.id_pokemon, newList);

    return uniqueList;
  }

  private async getPokemonList(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 8000);
    try {
      const query = 'SELECT * FROM Pokemon NATURAL JOIN TipoPokemon';
      this.pokemonList = await this.wrapperService.getDbData(query) as any;
      this.pokemonList = this.unique(this.pokemonList);
      this.pokemonList.forEach((pokemon) => {
        const { id_pokemon } = pokemon;
        if (Number(id_pokemon) < 10) {
          pokemon.formatedId = `00${Number(id_pokemon)}`;
        } else if (Number(id_pokemon) < 100) {
          pokemon.formatedId = `0${Number(id_pokemon)}`;
        } else {
          pokemon.formatedId = `${Number(id_pokemon)}`;
        }
        pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.formatedId}.png`;
      });
    } catch (e) {
      console.log('Error getting pokemon list', e);
    }
  }

  ngOnInit() {
    this.getPokemonList();
  }

}
