import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVTresumeDetailsComponent } from './svtresume-details.component';

describe('SVTresumeDetailsComponent', () => {
  let component: SVTresumeDetailsComponent;
  let fixture: ComponentFixture<SVTresumeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVTresumeDetailsComponent]
    });
    fixture = TestBed.createComponent(SVTresumeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
