import { TestBed } from '@angular/core/testing';

import { MyRadioAppService } from './my-radio-app.service';

describe('MyRadioAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRadioAppService = TestBed.get(MyRadioAppService);
    expect(service).toBeTruthy();
  });
});
