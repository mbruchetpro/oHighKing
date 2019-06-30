import { Component, Input, OnInit } from '@angular/core';
import { IHiking } from '../models/hiking.definitions';

@Component({
  selector: 'app-list-step',
  templateUrl: './list-step.component.html',
  styleUrls: ['./list-step.component.scss'],
})
export class ListStepComponent implements OnInit {
  @Input() hiking: IHiking;
  constructor() { }

  ngOnInit() {}

}
