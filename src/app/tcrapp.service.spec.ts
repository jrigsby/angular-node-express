import { TestBed, inject } from '@angular/core/testing';

import { TcrappService } from './tcrapp.service';

describe('TcrappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TcrappService]
    });
  });

  it('should be created', inject([TcrappService], (service: TcrappService) => {
    expect(service).toBeTruthy();
  }));
});
