import { TestBed } from '@angular/core/testing';

import { DynamicFieldService } from './dynamic-field.service';

describe('DynamicFieldService', () => {
  let service: DynamicFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
