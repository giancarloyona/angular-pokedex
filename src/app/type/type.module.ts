import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypesComponent } from './components/list-types/list-types.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { DetailTypeComponent } from './components/detail-type/detail-type.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  declarations: [ListTypesComponent, DetailTypeComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    NgxPopperjsModule.forRoot(),
  ],
  exports: [ListTypesComponent],
})
export class TypeModule {}
