import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatespeakersComponent } from './createspeakers.component';

describe('CreatespeakersComponent', () => {
  let component: CreatespeakersComponent;
  let fixture: ComponentFixture<CreatespeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatespeakersComponent]
    });
    fixture = TestBed.createComponent(CreatespeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
