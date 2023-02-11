import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { map } from 'rxjs';
import { response } from '../../models/response.model';
import { Response } from '../../classes/response.class';

@Component({
  selector: 'app-list-per-generation',
  templateUrl: './list-per-generation.component.html',
  styleUrls: ['./list-per-generation.component.css'],
})
export class ListPerGenerationComponent implements OnInit {
  listOfPokemon!: any;
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.router.events.subscribe(() => this.ngOnInit());
  }

  get generation() {
    /**
     * Gets from the URL the generation to search
     */
    const generation: string = this.activatedRoute.snapshot.paramMap.get(
      'gen'
    ) as string;
    return generation;
  }

  getPokemons(generation: string) {
    /**
     * Fetches the data for the specified generation
     */
    return this.pokemonService
      .getPokemonGeneration(generation)
      .pipe(
        map((res: response) => {
          return new Response(res);
        })
      )
      .subscribe({
        next: (n) => {
          this.listOfPokemon = n.results;
        },
        complete: () => {},
      });
  }

  ngOnInit(): void {
    this.getPokemons(this.generation);
  }
}
