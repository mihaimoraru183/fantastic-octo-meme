import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogroductComponent } from './dialogroduct.component';

describe('DialogroductComponent', () => {
  let component: DialogroductComponent;
  let fixture: ComponentFixture<DialogroductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogroductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
