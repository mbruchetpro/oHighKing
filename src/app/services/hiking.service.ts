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
        id: "ldejfoej",
        title: "Puy de dôme",
        address: "lore",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        difficultyRating: 4,
        duration: 3,
        lengthMeters: 10,
        steps: [], // Todo : Mettre interface Step
        idCreator: "ofjof",
      },
      {
        id: "deede",
        title: "Puy de la vache",
        address: "rue de la vache",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        difficultyRating: 5,
        duration: 6,
        lengthMeters: 60,
        steps: [], // Todo : Mettre interface Step
        idCreator: "ofjof",
      },
    ];
  }

  getHiking(id: string): Observable<IHiking> {
    let hiking = this.hikingList.find(hike => hike.id === id);
    return of(hiking);
  }
}
