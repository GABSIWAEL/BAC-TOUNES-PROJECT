import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVTScienceExpComponent } from './svt-science-exp.component';

describe('SVTScienceExpComponent', () => {
  let component: SVTScienceExpComponent;
  let fixture: ComponentFixture<SVTScienceExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVTScienceExpComponent]
    });
    fixture = TestBed.createComponent(SVTScienceExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
