import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeComponent } from './detail-type.component';

describe('DetailTypeComponent', () => {
  let component: DetailTypeComponent;
  let fixture: ComponentFixture<DetailTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
