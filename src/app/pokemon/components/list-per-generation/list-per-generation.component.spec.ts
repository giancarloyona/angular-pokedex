import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerGenerationComponent } from './list-per-generation.component';

describe('ListPerGenerationComponent', () => {
  let component: ListPerGenerationComponent;
  let fixture: ComponentFixture<ListPerGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPerGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPerGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
