import {
  EffectChange,
  EffectEntry2,
  FlavorTextEntry,
  Generation,
  Name,
  Pokemon,
  ability,
} from '../models/ability.model';

export class Ability implements ability {
  effect_changes: EffectChange[];
  effect_entries: EffectEntry2[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Generation;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];

  constructor(ability: ability) {
    this.effect_changes = ability.effect_changes;
    this.effect_entries = ability.effect_entries;
    this.flavor_text_entries = ability.flavor_text_entries;
    this.generation = ability.generation;
    this.id = ability.id;
    this.is_main_series = ability.is_main_series;
    this.name = ability.name;
    this.names = ability.names;
    this.pokemon = ability.pokemon;
  }
}
