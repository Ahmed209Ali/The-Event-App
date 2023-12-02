import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnavbarComponent } from './anavbar.component';

describe('AnavbarComponent', () => {
  let component: AnavbarComponent;
  let fixture: ComponentFixture<AnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnavbarComponent]
    });
    fixture = TestBed.createComponent(AnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
