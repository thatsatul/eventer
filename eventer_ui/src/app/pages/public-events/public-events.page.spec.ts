import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEventsPage } from './public-events.page';

describe('PublicEventsPage', () => {
  let component: PublicEventsPage;
  let fixture: ComponentFixture<PublicEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
