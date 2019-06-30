import { Injectable } from '@angular/core';
import { IHiking } from '../home/home.definition';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { TimerService } from './timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class HikingService {
  hikingList: IHiking[];
  statusHiking: BehaviorSubject<boolean>;

  constructor(private timerService: TimerService) {
    this.hikingList = [
      {
        id: 'ldejfoej',
        title: 'Puy de dôme',
        address: 'lore',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        difficultyRating: 4,
        duration: 275,
        lengthMeters: 10,
        steps: [
          {
            id: 0,
            geolocation: {
              longitude: 3.086948,
              latitude: 45.77996,
            },
            validate: false
          },
          {
            id: 1,
            geolocation: {
              longitude: 3.021607,
              latitude: 45.781336,
            },
            validate: false
          },
          {
            id: 2,
            geolocation: {
              longitude: 2.963762,
              latitude: 45.771927,
            },
            validate: false
          }
        ], // Todo : Mettre interface Step
        idCreator: 'ofjof',
        picture: 'puy-de-dome.jpg',
      },
      {
        id: 'deede',
        title: 'Puy de la vache',
        address: 'rue de la vache',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        difficultyRating: 5,
        duration: 6,
        lengthMeters: 60,
        steps: [
          {
            id: 0,
            geolocation : {
              longitude: 3.087081,
              latitude: 45.746768,
            },
            validate: false
          },
          {
            id: 1,
            geolocation: {
              longitude: 3.0043,
              latitude: 45.7039,
            },
            validate: false
          },
          {
            id: 2,
            geolocation: {
              longitude: 2.962887,
              latitude: 45.701996,
            },
            validate: false
          },
        ], // Todo : Mettre interface Step
        idCreator: 'ofjof',
        picture: 'puy-de-la-vache.jpg'
      },
    ];
    console.log("Moi le service est la ")
    this.statusHiking = new BehaviorSubject(this.getHikingInProgress() !== undefined);
    this.statusHiking.subscribe( sub =>  console.log( "SERVIIIIIIIIIICE " , sub));
  }
  
  getHiking(id: string): Observable<IHiking> {
    const hiking = this.hikingList.find(hike => hike.id === id);
    return of(hiking);
  }

  getHikings(): Observable<IHiking[]> {
    return of(this.hikingList);
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
