import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../../services/type.service';
import { map } from 'rxjs';
import { type } from '../../models/type.model';
import { PokemonType } from '../../classes/type.class';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'app-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.css'],
})
export class DetailTypeComponent implements OnInit {
  id: string = '';
  type!: PokemonType;

  // popper settings
  popperTrigger = NgxPopperjsTriggers.hover;
  popperPlacement = NgxPopperjsPlacements.BOTTOM;
  popperApplyClass = 'text-dark, bg-white, rounded, auto';
  popperBoundaries = 'double_damage_to';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.getID();
    if (this.id) {
      this.getDetails(this.id);
    }
  }

  getID() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  getDetails(id: string) {
    this.typeService
      .getType(id)
      .pipe(map((response: type) => new PokemonType(response)))
      .subscribe({
        next: (n) => {
          this.type = n;
        },
        error: (e) => {
          console.error(e);
        },
      });
  }

  changeToType(type: string) {
    this.router.navigate(['/types', type]);
    this.getDetails(type);
  }
}
