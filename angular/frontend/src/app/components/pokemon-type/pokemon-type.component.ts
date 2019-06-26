import { Component, OnInit, Input } from '@angular/core';

export interface TypesColors {
  type: string;
  background: string;
  color: string;
}
@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})

export class PokemonTypeComponent implements OnInit {

  @Input() types: string[];
  @Input() background: string = 'blue';
  @Input() color: string = 'white';

  public typesObj: TypesColors[] = [];

  constructor() { }

  ngOnInit() {
    if (!this.types) { return; }
    this.types.forEach((type: string) => {
      let color;
      let background;

      if (type === 'eletrico') {
        background = '#eed536';
        color = 'black';
      } else if (type === 'fogo') {
        background = '#fd7d25';
        color = 'white';
      } else if (type === 'grama') {
        background = '#9bcd50';
        color = 'black';
      } else if (type === 'venenoso') {
        background = '#b97ec9';
        color = 'white';
      } else if (type === 'agua') {
        background = '#4591c4';
        color = 'white';
      } else if (type === 'inseto') {
        background = '#71a03f';
        color = 'white';
      } else if (type === 'terra') {
        background = '#ab9742';
        color = 'black';
      } else if (type === 'fada') {
        background = '#feb9ea';
        color = 'black';
      } else if (type === 'fada') {
        background = '#d66725';
        color = 'white';
      } else if (type === 'psiquico') {
        background = '#f466ba';
        color = 'white';
      } else if (type === 'metal') {
        background = '#9eb8b9';
        color = 'black';
      } else if (type === 'fantasma') {
        background = '#7b62a3';
        color = 'white';
      } else if (type === 'dragao') {
        background = '#f26e57';
        color = 'white';
      } else if (type === 'noturno') {
        background = '#707070';
        color = 'white';
      } else if (type === 'gelo') {
        background = '#51c4e6';
        color = 'black';
      } else if (type === 'lutador') {
        background = '#d56623';
        color = 'white';
      } else {
        background = 'gray';
        color = 'white';
      }

      const formatedType: TypesColors = {
        type,
        color,
        background,
      };
      this.typesObj.push(formatedType);
    });
  }

}
