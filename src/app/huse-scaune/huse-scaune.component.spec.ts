import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuseScauneComponent } from './huse-scaune.component';

describe('HuseScauneComponent', () => {
  let component: HuseScauneComponent;
  let fixture: ComponentFixture<HuseScauneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuseScauneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuseScauneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
