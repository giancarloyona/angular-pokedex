import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAbilitiesComponent } from './components/list-abilities/list-abilities.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailAbilityComponent } from './components/detail-ability/detail-ability.component';

@NgModule({
  declarations: [ListAbilitiesComponent, DetailAbilityComponent],
  imports: [CommonModule, NgxPaginationModule, RouterModule, SharedModule],
  exports: [ListAbilitiesComponent, DetailAbilityComponent],
})
export class AbilityModule {}
