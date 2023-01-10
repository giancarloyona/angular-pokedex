import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, PokemonModule],
  exports: [],
})
export class MainModule {}
