import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList!: any;

  ngOnInit(): void {
    this.getAllPokemon();
  }

  constructor(private pokemonService: PokemonService) {}

  getAllPokemon() {
    this.pokemonService
      .getAllPokemon()
      .pipe(
        map((r) => {
          const response = Object.values(r)[3];
          return response;
        })
      )
      .subscribe({
        next: (n) => {
          this.pokemonList = n;
        },
      });
  }

  getDetails(url: string) {
    console.log(url);
  }
}
