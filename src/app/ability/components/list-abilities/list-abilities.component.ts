import { Component, OnInit } from '@angular/core';
import { AbilityService } from '../../services/ability.service';
import { EMPTY, delay, expand, map, reduce, tap } from 'rxjs';
import { Result, response } from 'src/app/pokemon/models/response.model';

@Component({
  selector: 'app-list-abilities',
  templateUrl: './list-abilities.component.html',
  styleUrls: ['./list-abilities.component.css'],
})
export class ListAbilitiesComponent implements OnInit {
  results: Result[] = [];
  currentPage: number = 1;
  isLoadingData: boolean = false;
  error: boolean = false;

  constructor(private abilityService: AbilityService) {}

  ngOnInit(): void {
    this.isLoadingData = true;

    this.abilityService
      .getAbilities()
      .pipe(tap((res) => this.results.push(res.results)))
      .subscribe({
        next: () => {},
        error: () => {
          this.error = true;
        },
        complete: () => {
          this.isLoadingData = false;
          this.results = this.results.flat(1);
        },
      });
  }
}
