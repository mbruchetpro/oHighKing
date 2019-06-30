import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // timer
  hours: BehaviorSubject<number>;
  minutes: BehaviorSubject<number>;
  seconds: BehaviorSubject<number>;

  time: number;
  interval: NodeJS.Timeout;

  constructor() {
    this.time = localStorage.getItem('ohighking_timer-in-progress') ?
        parseInt(localStorage.getItem('ohighking_timer-in-progress')) :
        0;
    console.log('timer', this.time, localStorage.getItem('ohighking_timer-in-progress'));
    this.hours = new BehaviorSubject(0);
    this.minutes = new BehaviorSubject(0);
    this.seconds = new BehaviorSubject(0);
  }

  public runTimer(): void {
    if (!localStorage.getItem('ohighking_timer-in-progress')) {
      localStorage.setItem('ohighking_timer-in-progress', this.time.toString());
      this.interval = setInterval(() => {
            this.time++;
            console.log('seconds', this.time);
            this.seconds.next(this.time % 60);
            this.minutes.next(Math.round(this.time / 60));
            this.hours.next(Math.round(this.time / 3600));
        }, 1000);
    }
  }

  public stopTimer(): void {
    clearInterval(this.interval);
    localStorage.removeItem('ohighking_timer-in-progress');
    this.time = 0;
    this.seconds.next(0);
    this.minutes.next(0);
    this.hours.next(0);
  }
}
