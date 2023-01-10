import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailPokemonComponent } from './pokemon/components/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {
    path: ``,
    component: MainComponent,
  },
  {
    path: 'detail/:id',
    component: DetailPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
