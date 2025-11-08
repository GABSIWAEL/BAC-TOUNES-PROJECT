import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesInArticleComponent } from './annonces-in-article.component';

describe('AnnoncesInArticleComponent', () => {
  let component: AnnoncesInArticleComponent;
  let fixture: ComponentFixture<AnnoncesInArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesInArticleComponent]
    });
    fixture = TestBed.createComponent(AnnoncesInArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
