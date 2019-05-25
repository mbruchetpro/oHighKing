import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';
import {IHiking} from '../home/home.definition';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  hiking: IHiking;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hikingService: HikingService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
  }

}
