/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UrlsService } from './urls.service';

describe('Service: Urls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlsService]
    });
  });

  it('should ...', inject([UrlsService], (service: UrlsService) => {
    expect(service).toBeTruthy();
  }));
});
