import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipByMapComponent } from './ship-by-map.component';

describe('ShipByMapComponent', () => {
  let component: ShipByMapComponent;
  let fixture: ComponentFixture<ShipByMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipByMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipByMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
