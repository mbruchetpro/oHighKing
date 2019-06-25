import { Component, OnInit, Input } from '@angular/core';
import { IHiking } from '../home/home.definition';
import { HikingService } from '../services/hiking.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() pageName: string;

  constructor( private hikingService: HikingService) { }

  ngOnInit() {}

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
