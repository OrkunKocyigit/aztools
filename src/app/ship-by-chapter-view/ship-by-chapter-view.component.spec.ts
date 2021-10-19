import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipByChapterViewComponent } from './ship-by-chapter-view.component';

describe('ShipByChapterViewComponent', () => {
  let component: ShipByChapterViewComponent;
  let fixture: ComponentFixture<ShipByChapterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipByChapterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipByChapterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
