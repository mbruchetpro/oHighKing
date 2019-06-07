import {Component, Input, OnInit} from '@angular/core';
import {IHiking} from '../home/home.definition';

@Component({
  selector: 'app-hiking-status-bar',
  templateUrl: './hiking-status-bar.component.html',
  styleUrls: ['./hiking-status-bar.component.scss'],
})
export class HikingStatusBarComponent implements OnInit {

  @Input() pageName: string;

  constructor() { }

  ngOnInit() {}

  goToBack() {
    history.back();
  }

  isHikingInProgress() {
    return this.getHikingInProgress() !== undefined && this.getHikingInProgress() !== null;
  }

  getHikingInProgress() {
    const hikingInProgess: IHiking = JSON.parse(localStorage.getItem('ohighking_hiking-in-progress'));
    return hikingInProgess;
  }
}
