import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoadingDataComponent } from './components/loading-data/loading-data.component';

@NgModule({
  declarations: [NavbarComponent, LoadingDataComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoadingDataComponent],
})
export class SharedModule {}
