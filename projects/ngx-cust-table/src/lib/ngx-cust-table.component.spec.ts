import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustTableComponent } from './ngx-cust-table.component';

describe('NgxCustTableComponent', () => {
  let component: NgxCustTableComponent;
  let fixture: ComponentFixture<NgxCustTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCustTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCustTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
