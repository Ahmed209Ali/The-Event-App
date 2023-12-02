import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewacountComponent } from './createnewacount.component';

describe('CreatenewacountComponent', () => {
  let component: CreatenewacountComponent;
  let fixture: ComponentFixture<CreatenewacountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewacountComponent]
    });
    fixture = TestBed.createComponent(CreatenewacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
