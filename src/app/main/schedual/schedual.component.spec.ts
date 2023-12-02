import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedualComponent } from './schedual.component';

describe('SchedualComponent', () => {
  let component: SchedualComponent;
  let fixture: ComponentFixture<SchedualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedualComponent]
    });
    fixture = TestBed.createComponent(SchedualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
