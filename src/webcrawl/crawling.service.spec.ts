import { TestBed } from '@angular/core/testing';

import { CrawlingService } from './crawling.service';

describe('CrawlingService', () => {
  let service: CrawlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrawlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
