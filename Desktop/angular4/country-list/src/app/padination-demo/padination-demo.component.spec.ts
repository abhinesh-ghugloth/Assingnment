import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadinationDemoComponent } from './padination-demo.component';

describe('PadinationDemoComponent', () => {
  let component: PadinationDemoComponent;
  let fixture: ComponentFixture<PadinationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadinationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadinationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
