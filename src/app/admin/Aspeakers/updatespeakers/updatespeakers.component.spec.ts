import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespeakersComponent } from './updatespeakers.component';

describe('UpdatespeakersComponent', () => {
  let component: UpdatespeakersComponent;
  let fixture: ComponentFixture<UpdatespeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatespeakersComponent]
    });
    fixture = TestBed.createComponent(UpdatespeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
