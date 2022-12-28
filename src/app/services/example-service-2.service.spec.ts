import { TestBed } from '@angular/core/testing';

import { ExampleService2Service } from './example-service-2.service';

describe('ExampleService2Service', () => {
  let service: ExampleService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
