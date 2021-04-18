import { TestBed } from '@angular/core/testing';

import { CruddataService } from './cruddata.service';

describe('CruddataService', () => {
  let service: CruddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
