import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";

@NgModule({
  declarations: [
    ListPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
