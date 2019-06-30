import { Component, OnInit, Input } from '@angular/core';
import { HikingService } from '../services/hiking/hiking.service';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  hours: number;
  minutes: number;
  seconds: number;

  constructor( private hikingService: HikingService, private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.hours.subscribe(h => this.hours = h);
    this.timerService.minutes.subscribe(m => this.minutes = m);
    this.timerService.seconds.subscribe(s => this.seconds = s);
  }

  isHikingInProgress() {
    return this.hikingService.isHikingInProgress();
  }

  finishHiking() {
    this.hikingService.finishHiking();
  }

  getHikingInProgress() {
    return this.hikingService.getHikingInProgress();
  }
}
