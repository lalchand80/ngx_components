import { TestBed } from '@angular/core/testing';

import { NgxCustTableService } from './ngx-cust-table.service';

describe('NgxCustTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCustTableService = TestBed.get(NgxCustTableService);
    expect(service).toBeTruthy();
  });
});
