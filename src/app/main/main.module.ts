import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TypeModule } from '../type/type.module';
import { NgxPopperjsModule, NgxPopperjsPlacements } from 'ngx-popperjs';
import { AbilityModule } from '../ability/ability.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    AbilityModule,
    PokemonModule,
    TypeModule,
    NgxPopperjsModule.forRoot(),
  ],
  exports: [],
})
export class MainModule {}
