import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListspeakersComponent } from './listspeakers.component';

describe('ListspeakersComponent', () => {
  let component: ListspeakersComponent;
  let fixture: ComponentFixture<ListspeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListspeakersComponent]
    });
    fixture = TestBed.createComponent(ListspeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
