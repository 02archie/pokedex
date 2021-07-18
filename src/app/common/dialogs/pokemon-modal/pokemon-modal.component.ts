import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PokemonService } from "../../../pokemon/services/pokemon.service";

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent implements OnInit {

  pokemon : any = [];

  constructor(
    public dialogRef: MatDialogRef<PokemonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: PokemonService
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(respose: Boolean): void {
    this.dialogRef.close(respose);
  }

  getPokemonByid(id){
  this.pokemon = [];
  this.apiService.getPokemonByid(id).subscribe((data)=>{
    this.pokemon = data;
  })
  }

}
