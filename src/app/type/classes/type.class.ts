import {
  DamageRelations,
  Generation2,
  Index,
  Mfe,
  MoveDamageClass,
  Name,
  Pokemon,
  type,
} from '../models/type.model';

export class PokemonType implements type {
  damage_relations: DamageRelations;
  game_indices: Index[];
  generation: Generation2;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Mfe[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: Pokemon[];

  constructor(response: type) {
    this.damage_relations = response.damage_relations;
    this.game_indices = response.game_indices;
    this.generation = response.generation;
    this.id = response.id;
    this.move_damage_class = response.move_damage_class;
    this.moves = response.moves;
    this.name = response.name;
    this.names = response.names;
    this.past_damage_relations = response.past_damage_relations;
    this.pokemon = response.pokemon;
  }
}
