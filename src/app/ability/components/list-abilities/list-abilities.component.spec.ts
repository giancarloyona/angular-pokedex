import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbilitiesComponent } from './list-abilities.component';

describe('ListAbilitiesComponent', () => {
  let component: ListAbilitiesComponent;
  let fixture: ComponentFixture<ListAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAbilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
