import { Component, OnInit } from '@angular/core';
import { AbilityService } from '../../services/ability.service';
import { ActivatedRoute } from '@angular/router';
import { ability } from '../../models/ability.model';
import { map } from 'rxjs';
import { Ability } from '../../classes/ability.class';

@Component({
  selector: 'app-detail-ability',
  templateUrl: './detail-ability.component.html',
  styleUrls: ['./detail-ability.component.css'],
})
export class DetailAbilityComponent implements OnInit {
  abilityID: string = '';
  ability!: Ability;
  isLoadingData: boolean = false;

  short_desc: string = '';
  full_desc: string = '';

  constructor(
    private abilityService: AbilityService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.abilityID = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getAbilityByID(this.abilityID);
  }

  getAbilityByID(id: string) {
    this.isLoadingData = true;
    this.abilityService
      .getAbilityByID(id)
      .pipe(map((response: ability) => new Ability(response)))
      .subscribe({
        next: (n) => {
          this.ability = n;
        },
        complete: () => {
          this.isLoadingData = false;
          this.getDescription();
        },
      });
  }

  getDescription() {
    if (this.ability) {
      this.ability.effect_entries.forEach((el, index) => {
        if (el.language.name === 'en') {
          this.short_desc = this.ability.effect_entries.at(index)
            ?.short_effect as string;
          this.full_desc = this.ability.effect_entries.at(index)
            ?.effect as string;
        }
      });
    }
  }
}
