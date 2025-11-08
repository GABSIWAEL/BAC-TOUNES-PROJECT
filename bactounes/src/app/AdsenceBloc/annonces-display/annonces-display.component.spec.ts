import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesDisplayComponent } from './annonces-display.component';

describe('AnnoncesDisplayComponent', () => {
  let component: AnnoncesDisplayComponent;
  let fixture: ComponentFixture<AnnoncesDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesDisplayComponent]
    });
    fixture = TestBed.createComponent(AnnoncesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
