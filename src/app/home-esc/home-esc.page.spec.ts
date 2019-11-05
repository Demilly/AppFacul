import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEscPage } from './home-esc.page';

describe('HomeEscPage', () => {
  let component: HomeEscPage;
  let fixture: ComponentFixture<HomeEscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEscPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
