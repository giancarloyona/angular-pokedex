import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListPokemonComponent, DetailPokemonComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListPokemonComponent, DetailPokemonComponent],
})
export class PokemonModule {}
