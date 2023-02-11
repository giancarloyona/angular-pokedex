import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListPerGenerationComponent } from './pokemon/components/list-per-generation/list-per-generation.component';
import { DetailPokemonComponent } from './pokemon/components/detail-pokemon/detail-pokemon.component';
import { ListTypesComponent } from './type/components/list-types/list-types.component';
import { DetailTypeComponent } from './type/components/detail-type/detail-type.component';
import { ListAbilitiesComponent } from './ability/components/list-abilities/list-abilities.component';
import { DetailAbilityComponent } from './ability/components/detail-ability/detail-ability.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'list/gen/:gen',
    component: ListPerGenerationComponent,
  },
  {
    path: 'detail/:id',
    component: DetailPokemonComponent,
  },
  {
    path: 'types',
    component: ListTypesComponent,
  },
  {
    path: 'types/:id',
    component: DetailTypeComponent,
  },
  {
    path: 'abilities',
    component: ListAbilitiesComponent,
  },
  {
    path: 'abilities/:id',
    component: DetailAbilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
