import {
  Ability,
  Form,
  Index,
  Mfe,
  pokemon,
  Species,
  Sprites,
  Stat,
  Type,
} from '../models/pokemon.model';

export class Pokemon implements pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: Index[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;

  constructor(pokemon: pokemon) {
    this.abilities = pokemon.abilities;
    this.base_experience = pokemon.base_experience;
    this.forms = pokemon.forms;
    this.game_indices = pokemon.game_indices;
    this.height = pokemon.height;
    this.held_items = pokemon.held_items;
    this.id = pokemon.id;
    this.is_default = pokemon.is_default;
    this.location_area_encounters = pokemon.location_area_encounters;
    this.moves = pokemon.moves;
    this.name = pokemon.name;
    this.order = pokemon.order;
    this.past_types = pokemon.past_types;
    this.species = pokemon.species;
    this.sprites = pokemon.sprites;
    this.stats = pokemon.stats;
    this.types = pokemon.types;
    this.weight = pokemon.weight;
  }
}
