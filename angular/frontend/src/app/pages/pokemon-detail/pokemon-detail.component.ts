import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ActivatedRoute, Router } from '@angular/router';
import { WrapperService } from 'src/app/services/wrapper/wrapper.service';
import { PokemonType } from 'src/app/models/pokemon';
import { uniqBy } from 'ramda';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public isLoading: boolean = true;
  public idPokemon: number;
  public pokemonDetail: PokemonType[] = [];
  public pokemonItem: PokemonType;

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['PS', 'Atk', 'Def', 'Atk Especial', 'Def Especial', 'Velocidade'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{
    hoverBackgroundColor: '#44b5e2',
    hoverBorderColor: '#44b5e2',
    borderColor: '#30a7d7',
    backgroundColor: '#30a7d7',
    data: [65, 59, 80, 81, 56, 55],
    label: 'Dados do pokemon',
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wrapperService: WrapperService,
  ) { }

  private unique(pokemonList: PokemonType[]) {
    pokemonList.forEach((pokemon) => {
      const id_pokemon = this.idPokemon;
      if (Number(id_pokemon) < 10) {
        pokemon.formatedId = `00${Number(id_pokemon)}`;
      } else if (Number(id_pokemon) < 100) {
        pokemon.formatedId = `0${Number(id_pokemon)}`;
      } else {
        pokemon.formatedId = `${Number(id_pokemon)}`;
      }
      pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.formatedId}.png`;
    });

    const newList: PokemonType[] = [];

    pokemonList.forEach((pokemon) => {
      const copy = pokemon;
      const { id_pokemon } = copy;
      const filteredList = pokemonList.filter(pokemonItem => pokemonItem.id_pokemon === id_pokemon);
      copy.types = [];
      copy.evolucoes = [];
      filteredList.forEach((pokemonFiltered) => {
        copy.types.push(pokemonFiltered.tipo);
        copy.evolucoes.push(pokemonFiltered.evo_nome);
      });
      newList.push(copy);
    });
    const uniqueList = uniqBy(item => item.id_pokemon, newList);
    if (!uniqueList.length) { return null; }
    uniqueList[0].types = this.uniqArr(uniqueList[0].types);
    uniqueList[0].evolucoes = this.uniqArr(uniqueList[0].evolucoes);
    return uniqueList[0];
  }

  private uniqArr(a) {
    return a.sort().filter((item, pos, ary) => {
        return !pos || item !== ary[pos - 1];
    });
  }

  private async getPokemonIdEvolutions(pokemon: PokemonType): Promise<PokemonType> {
    pokemon.idEvolucoes = [];
    pokemon.imgEvolucoes = [];
    pokemon.idEvolucoes.push(this.idPokemon);
    pokemon.imgEvolucoes.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.formatedId}.png`);
    pokemon.evolucoes.forEach(async (evolution: string) => {
      try {
        const query = `SELECT * FROM Pokemon WHERE nome LIKE '${evolution}'`;
        const pokemonInfo = (await this.wrapperService.getDbData(query) as any)[0];
        const id_pokemon = pokemonInfo.id_pokemon;
        let formatedIdEvolution;
        if (Number(id_pokemon) < 10) {
          formatedIdEvolution = `00${Number(id_pokemon)}`;
        } else if (Number(id_pokemon) < 100) {
          formatedIdEvolution = `0${Number(id_pokemon)}`;
        } else {
          formatedIdEvolution = `${Number(id_pokemon)}`;
        }
        pokemon.idEvolucoes.push(id_pokemon);
        pokemon.imgEvolucoes.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedIdEvolution}.png`);
      } catch (e) {
        console.log('Error on getting evolutions', e);
      }
    });
    return pokemon;
  }

  private async getPokemonDetail(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
    try {
      // tslint:disable-next-line: max-line-length
      const pokemonEvolutionsQuery = `SELECT p1.nome, p1.descricao, tipo, p2.nome AS evo_nome FROM (((Pokemon AS p1 NATURAL JOIN TipoPokemon AS tp) JOIN Evolucao AS ev ON ev.id_de = p1.id_pokemon) JOIN Pokemon AS p2 ON ev.id_para = p2.id_pokemon) WHERE p1.id_pokemon = ${this.idPokemon}`;
      this.pokemonDetail = await this.wrapperService.getDbData(pokemonEvolutionsQuery) as any;
      this.pokemonDetail = this.unique(this.pokemonDetail);
      this.pokemonItem = this.pokemonDetail as any;
      if (this.pokemonItem) {
        this.pokemonItem = await this.getPokemonIdEvolutions(this.pokemonItem);
      }
      console.log('this.pokemonDetail', this.pokemonDetail);
      this.isLoading = false;
    } catch (e) {
      console.log('Error getting pokemon detail');
    }
  }

  ngOnInit() {
    this.idPokemon = this.route.snapshot.params['id'];
    this.getPokemonDetail();
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((val) => {
      if (val) {
        this.ngOnInit();
      }
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
