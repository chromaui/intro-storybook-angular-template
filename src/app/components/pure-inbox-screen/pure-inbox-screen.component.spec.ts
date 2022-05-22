/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';

describe('PureInboxScreenComponent', () => {
  let component: PureInboxScreenComponent;
  let fixture: ComponentFixture<PureInboxScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureInboxScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
