import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVTresumeComponent } from './svtresume.component';

describe('SVTresumeComponent', () => {
  let component: SVTresumeComponent;
  let fixture: ComponentFixture<SVTresumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVTresumeComponent]
    });
    fixture = TestBed.createComponent(SVTresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
