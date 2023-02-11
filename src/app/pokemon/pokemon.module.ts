import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { ListPerGenerationComponent } from './components/list-per-generation/list-per-generation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [
    SearchPokemonComponent,
    ListPerGenerationComponent,
    DetailPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [SearchPokemonComponent],
})
export class PokemonModule {}
