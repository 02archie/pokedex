import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModalComponent } from '../../../common/dialogs/pokemon-modal/pokemon-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  searchForm: FormGroup;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  //data pokemon
  list_pokemon: any = [];
  pokemon_by_id: any = [];
  show_icon: boolean = true;
  url: any = [];
  img: any = [];
  data_pokemon: any = [];

  constructor(
    public _formBuilder: FormBuilder,
    public apiService: PokemonService,
    public dialog: MatDialog
  ) {

   }

  ngOnInit(): void {
    this.initializeForm();
    this.getPokemon();
  }

  initializeForm(): void {
    this.searchForm = this._formBuilder.group({
      filter: ['', [Validators.required]],
    });
  }

  //get all pokemon
  getPokemon() {
    this.list_pokemon = [];
    this.apiService.getPokemon().subscribe((data) => {
      this.list_pokemon = data.results;
      console.log(this.list_pokemon);
      this.list_pokemon.map((pokemon) => {
        this.get_url(pokemon.url);
      });
    }),
      (error) => {
        console.log(error);
      };
  }

  async get_url(url) {
    this.img = [];
    let data = await fetch(url);
    let response = await data.json();
    this.img.push(response);
    console.log(this.img);
  }

  //get pokemon by id
  getPokemonSearch() {
    this.pokemon_by_id = [];
    this.apiService.getPokemonByid('pikachu').subscribe((data) => {
      this.pokemon_by_id = data;
    }),
      (error) => {
        console.log(error);
      };
  }

  //modal
  showModal(index: any) {
    const dialogConfig = new MatDialogConfig();
    this.data_pokemon = this.img[index];
    console.log(this.data_pokemon);
    dialogConfig.data = {
      data: this.data_pokemon,
    };
    this.dialog.open(PokemonModalComponent, dialogConfig);
  }

  onTableDataChange(event){
    this.page = event;
    this.getPokemon();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPokemon();
  }  

}
