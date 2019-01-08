import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTapComponent } from './double-tap-component.component';

describe('DoubleTapComponent', () => {
  let component: DoubleTapComponent;
  let fixture: ComponentFixture<DoubleTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
