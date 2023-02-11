import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAbilityComponent } from './detail-ability.component';

describe('DetailAbilityComponent', () => {
  let component: DetailAbilityComponent;
  let fixture: ComponentFixture<DetailAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
