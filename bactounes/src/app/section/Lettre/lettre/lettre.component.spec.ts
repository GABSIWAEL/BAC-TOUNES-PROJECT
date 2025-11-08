import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreComponent } from './lettre.component';

describe('LettreComponent', () => {
  let component: LettreComponent;
  let fixture: ComponentFixture<LettreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LettreComponent]
    });
    fixture = TestBed.createComponent(LettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
