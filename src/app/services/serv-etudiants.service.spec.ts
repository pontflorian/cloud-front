import { TestBed } from '@angular/core/testing';

import { ServEtudiantsService } from './serv-etudiants.service';

describe('ServEtudiantsService', () => {
  let service: ServEtudiantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServEtudiantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
