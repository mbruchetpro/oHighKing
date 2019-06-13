import { Injectable } from '@angular/core';
import { IHiking } from '../home/home.definition';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HikingService {
  hikingList: IHiking[];

  constructor() {
    this.hikingList = [
      {
        id: 'ldejfoej',
        title: 'Puy de dôme',
        address: 'lore',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        difficultyRating: 4,
        duration: 3,
        lengthMeters: 10,
        steps: [
          {
            id: 0,
            longitude: 150.5420,
            latitude: 126.9053
          },
          {
            id: 1,
            longitude: 110.5420,
            latitude: 398.3003
          },
          {
            id: 3,
            longitude: 180.5420,
            latitude: 91.9053
          }
        ], // Todo : Mettre interface Step
        idCreator: 'ofjof',
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
            longitude: 150.5420,
            latitude: 126.9053
          },
          {
            id: 1,
            longitude: 110.5420,
            latitude: 398.3003
          },
          {
            id: 3,
            longitude: 180.5420,
            latitude: 91.9053
          }
        ], // Todo : Mettre interface Step
        idCreator: 'ofjof',
      },
    ];
  }

  getHiking(id: string): Observable<IHiking> {
    const hiking = this.hikingList.find(hike => hike.id === id);
    return of(hiking);
  }

  getHikings(): Observable<IHiking[]> {
    return of(this.hikingList);
  }
}
