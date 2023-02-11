import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Pokemon } from '../../classes/pokemon.class';
import { pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
})
export class SearchPokemonComponent {
  pokemon!: Pokemon | null;
  pokemonID: string = '';
  pokemonForm!: FormGroup;

  isLoadingData: boolean = false;
  error: boolean = false;

  constructor(private pokemonService: PokemonService) {
    this.pokemonForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      pokemon: new FormControl('', [Validators.required]),
    });
  }

  focusDetails(): void {
    const divDetails = document.getElementById('displayDetails');
    if (divDetails) {
      divDetails.scrollIntoView({ behavior: 'smooth' });
    }
  }

  dismiss(): void {
    this.error = false;
    this.isLoadingData = false;
    this.pokemon = null;
  }

  searchPokemon(): void {
    /**
     * Search for a specific Pokémon, via its  ID or name.
     */
    const data: string | number = this.pokemonForm.get('pokemon')?.value;

    this.dismiss();
    this.isLoadingData = true;

    this.pokemonService
      .getPokemon(data)
      .pipe(map((response: pokemon) => new Pokemon(response)))
      .subscribe({
        next: (response) => {
          this.isLoadingData = false;
          this.pokemonForm.reset();
          this.pokemon = response;
        },
        error: () => {
          this.error = true;
        },
      });
  }

  searchRandomPokemon(): void {
    /**
     * Search for a random Pokémon.
     * As of now, for the current generation (IX), there are officialy
     * 1008 Pokémon.
     */
    this.dismiss();

    const randomID: number = Math.floor(Math.random() * 1007 + 1);
    this.isLoadingData = true;

    this.pokemonService
      .getPokemon(randomID)
      .pipe(map((response: pokemon) => new Pokemon(response)))
      .subscribe({
        next: (response) => {
          this.isLoadingData = false;
          this.pokemonForm.reset();
          this.pokemon = response;
        },
        error: () => {},
      });
  }
}
