import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingPage } from './hiking.page';

describe('HikingPage', () => {
  let component: HikingPage;
  let fixture: ComponentFixture<HikingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
