/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InboxScreenComponent } from './inbox-screen.component';

describe('InboxScreenComponent', () => {
  let component: InboxScreenComponent;
  let fixture: ComponentFixture<InboxScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
