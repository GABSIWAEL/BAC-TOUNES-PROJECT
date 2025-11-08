import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacExmListComponent } from './bac-exm-list.component';

describe('BacExmListComponent', () => {
  let component: BacExmListComponent;
  let fixture: ComponentFixture<BacExmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacExmListComponent]
    });
    fixture = TestBed.createComponent(BacExmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
