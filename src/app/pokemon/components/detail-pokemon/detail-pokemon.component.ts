import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { map } from 'rxjs';
import { Pokemon } from '../../classes/pokemon.class';
import { pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  id: string | null = '';
  min_id: number = 1;
  max_id: number = 1008;
  pokemon!: Pokemon;
  totalStats!: number;
  error: boolean = false;

  faLeftArrow = 'fa-solid fa-arrow-left-long';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getID();
    if (this.id) {
      this.getDetails(this.id);
    }
  }

  getID() {
    this.id = this.route.snapshot.paramMap.get(`id`) as string;
  }

  getDetails(id: string | number) {
    this.pokemonService
      .getPokemon(id)
      .pipe(map((response: pokemon) => new Pokemon(response)))
      .subscribe({
        error: (e) => {
          console.error(e);
        },
        next: (n) => {
          this.pokemon = n;
          this.getTotalStats(this.pokemon);
        },
      });
  }

  getTotalStats(pokemon: Pokemon) {
    let total = 0;
    pokemon.stats.forEach((stat) => (total += stat.base_stat));
    this.totalStats = total;
  }

  previous(id: number) {
    if (id <= this.min_id) {
      id = this.max_id;
    } else {
      id = id - 1;
    }

    this.router.navigate(['/detail', id]);
    this.getDetails(id);
  }

  next(id: number) {
    if (id >= this.max_id) {
      id = this.min_id;
    } else {
      id = id + 1;
    }

    this.router.navigate(['/detail', id]);
    this.getDetails(id);
  }
}
