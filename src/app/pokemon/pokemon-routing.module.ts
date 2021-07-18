import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { LIST_POKEMON } from "./pokemon.constant.module";

const routes: Routes = [
  {
    path: LIST_POKEMON,
    component: ListPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
