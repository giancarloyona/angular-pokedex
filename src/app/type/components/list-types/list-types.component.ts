import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { map } from 'rxjs';
import { response } from 'src/app/pokemon/models/response.model';
import { Response } from 'src/app/pokemon/classes/response.class';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.css'],
})
export class ListTypesComponent implements OnInit {
  constructor(private typeService: TypeService) {
    this.getAllTypes();
  }

  response!: Response;
  types: any;
  currentPage: number = 1;

  ngOnInit(): void {}

  getAllTypes() {
    this.typeService
      .getTypes()
      .pipe(
        map((response: response) => {
          return new Response(response);
        })
      )
      .subscribe({
        next: (n) => {
          this.response = n;
        },
        complete: () => {
          this.types = this.response.results;
        },
      });
  }
}
