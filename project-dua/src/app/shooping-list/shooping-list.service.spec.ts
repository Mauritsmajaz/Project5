/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoopingListService } from './shooping-list.service';

describe('Service: ShoopingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoopingListService]
    });
  });

  it('should ...', inject([ShoopingListService], (service: ShoopingListService) => {
    expect(service).toBeTruthy();
  }));
});
