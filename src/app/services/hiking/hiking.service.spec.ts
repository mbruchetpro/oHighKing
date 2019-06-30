import { TestBed } from '@angular/core/testing';

import { HikingService } from './hiking.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IHiking} from '../../models/hiking.definitions';

describe('HikingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule
    ]
  }).compileComponents());

  it('doit se crée normalement', () => {
    const service: HikingService = TestBed.get(HikingService);
    expect(service).toBeTruthy();
  });

  it('.getHikings() ne doit pas être undefined', () => {
    const service: HikingService = TestBed.get(HikingService);
    expect(service.getHikings()).toBeDefined();
  });

  it('.getHikings() doit être une liste', () => {
    const service: HikingService = TestBed.get(HikingService);
    service.getHikings().subscribe((data: any) => {
      expect(typeof data.hikings).toEqual('Array');
    });
  });

  it('.getHikings() ne doit pas renvoyer une liste vide', () => {
    const service: HikingService = TestBed.get(HikingService);
    service.getHikings().subscribe((data: any) => {
      expect(data.hikings.length > 0);
    });
  });

  it('.getHiking(ldejfoej) ne doit pas être undefined', () => {
    const service: HikingService = TestBed.get(HikingService);
    expect(service.getHikings()).toBeDefined();
  });

  it('.getHiking(ldejfoej) doit être un Hiking', () => {
    const service: HikingService = TestBed.get(HikingService);
    service.getHiking('ldejfoej').subscribe((hiking: IHiking) => {
      expect(typeof hiking).toEqual('object');
    });
  });

  it('.getHiking(ldejfoej) doit avoir le titre "Puy de dôme"', () => {
    const service: HikingService = TestBed.get(HikingService);
    service.getHiking('ldejfoej').subscribe((hiking: IHiking) => {
      expect(hiking.title).toBe('Puy de dôme');
    });
  });
});
