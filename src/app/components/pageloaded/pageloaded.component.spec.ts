import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageloadedComponent } from './pageloaded.component';

describe('PageloadedComponent', () => {
  let component: PageloadedComponent;
  let fixture: ComponentFixture<PageloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
