import { Component, OnInit } from '@angular/core';
import { IHiking } from '../home/home.definition';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  hiking: any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private service: HikingService
  ) { 
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap )=> this.service.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
    
    console.log(this.hiking);
  }

}
