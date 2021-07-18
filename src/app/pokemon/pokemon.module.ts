import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";

//routing
import { PokemonRoutingModule } from "./pokemon-routing.module";

//material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    PokemonRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  exports: [
    ListPokemonComponent
  ],
  providers: [
    {provide: MatPaginatorIntl}
  ]
})
export class PokemonModule { }
