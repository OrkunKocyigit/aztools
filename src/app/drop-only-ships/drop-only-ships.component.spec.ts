import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOnlyShipsComponent } from './drop-only-ships.component';

describe('DropOnlyShipsComponent', () => {
  let component: DropOnlyShipsComponent;
  let fixture: ComponentFixture<DropOnlyShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropOnlyShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropOnlyShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
