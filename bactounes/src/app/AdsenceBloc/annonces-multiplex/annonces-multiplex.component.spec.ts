import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesMultiplexComponent } from './annonces-multiplex.component';

describe('AnnoncesMultiplexComponent', () => {
  let component: AnnoncesMultiplexComponent;
  let fixture: ComponentFixture<AnnoncesMultiplexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesMultiplexComponent]
    });
    fixture = TestBed.createComponent(AnnoncesMultiplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
