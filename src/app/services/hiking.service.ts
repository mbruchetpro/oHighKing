import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { TimerService } from './timer/timer.service';
import { HttpClient } from '@angular/common/http';
import {IHiking} from '../models/hiking.definitions';

@Injectable({
  providedIn: 'root'
})
export class HikingService {
  hikingList: IHiking[];
  statusHiking: BehaviorSubject<boolean>;

  constructor(
      private timerService: TimerService,
      private http: HttpClient
  ) {
    this.statusHiking = new BehaviorSubject(this.getHikingInProgress() !== undefined);
    this.statusHiking.subscribe();
    this.getHikings().subscribe();
  }

  getHiking(id: string): Observable<IHiking> {
    const hiking = this.hikingList.find(hike => hike.id === id);
    return of(hiking);
  }

  getHikings(): Observable<IHiking[]> {
    const hikings: Observable<IHiking[]> = this.http.get<IHiking[]>('assets/data/hikings.json', {responseType: 'json'});
    hikings.subscribe((data: any) => this.hikingList = data.hikings);
    return hikings;
  }

  setHikingInProgess(hiking: IHiking) {
    if (this.getHikingInProgress) {
      this.finishHiking();
    }
    localStorage.setItem('ohighking_hiking-in-progress', JSON.stringify(hiking));
    this.statusHiking.next(false);
    this.timerService.runTimer();
  }

  isHikingInProgress() {
    return this.getHikingInProgress() !== undefined && this.getHikingInProgress() !== null;
  }

  getHikingInProgress() {
    const hikingInProgess: IHiking = JSON.parse(localStorage.getItem('ohighking_hiking-in-progress'));
    return hikingInProgess;
  }

  finishHiking() {
    localStorage.removeItem('ohighking_hiking-in-progress');
    this.statusHiking.next(true);
    this.timerService.stopTimer();
  }
}
