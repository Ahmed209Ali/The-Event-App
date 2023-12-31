import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersComponent } from './supporters.component';

describe('SupportersComponent', () => {
  let component: SupportersComponent;
  let fixture: ComponentFixture<SupportersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportersComponent]
    });
    fixture = TestBed.createComponent(SupportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
