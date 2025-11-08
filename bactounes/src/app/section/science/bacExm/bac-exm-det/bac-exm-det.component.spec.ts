import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacExmDetComponent } from './bac-exm-det.component';

describe('BacExmDetComponent', () => {
  let component: BacExmDetComponent;
  let fixture: ComponentFixture<BacExmDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacExmDetComponent]
    });
    fixture = TestBed.createComponent(BacExmDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
