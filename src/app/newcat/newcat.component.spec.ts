import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatComponent } from './newcat.component';

describe('NewcatComponent', () => {
  let component: NewcatComponent;
  let fixture: ComponentFixture<NewcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
