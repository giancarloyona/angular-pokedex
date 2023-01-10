import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, retry } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemonId: string = '';
  pokemon!: Pokemon;

  ngOnInit(): void {}

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getPokemon(this.pokemonId);
  }

  getPokemon(id: string) {
    this.pokemonService
      .getPokemon(id)
      .pipe(
        map((response) => {
          return JSON.parse(JSON.stringify(response)) as Pokemon;
        })
      )
      .subscribe({
        next: (response) => {
          this.pokemon = response;
        },
        error: (e) => {
          console.error(e);
        },
      });
  }

  navigateTo(id: number) {
    if (id < 1) {
      id = 1;
    } else if (id > 151) {
      id = 151;
    } else {
      this.router
        .navigate(['/detail', id.toString()])
        .then(() => window.location.reload());
    }
  }
}
