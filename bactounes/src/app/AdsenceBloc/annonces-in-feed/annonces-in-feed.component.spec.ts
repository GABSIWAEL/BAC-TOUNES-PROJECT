import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesInFeedComponent } from './annonces-in-feed.component';

describe('AnnoncesInFeedComponent', () => {
  let component: AnnoncesInFeedComponent;
  let fixture: ComponentFixture<AnnoncesInFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesInFeedComponent]
    });
    fixture = TestBed.createComponent(AnnoncesInFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
