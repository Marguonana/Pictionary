import { TestBed } from '@angular/core/testing';

import { ExceptionFactoryService } from '../service/exception-factory.service';

describe('ExceptionFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceptionFactoryService = TestBed.get(ExceptionFactoryService);
    expect(service).toBeTruthy();
  });
});
