import { Component, OnInit } from '@angular/core';
import { IHiking } from './home.definition';
import { LoginService } from '../services/login.service';
import { IUser } from '../models/user.definitions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hikingList: IHiking[];
  user: IUser;
  rate: [];

  constructor(private loginService: LoginService, private router: Router) {
    this.hikingList = [
      {
        id: "ldejfoej",
        title: "Puy de dôme",
        address: "rue de la belette",
        description: "Volcan phare de la Chaîne des Puys, le puy de Dôme est un site emblématique la région Auvergne Rhône-Alpes, inscrit au patrimoine mondial de l'UNESCO depuis le 2 juillet 2018, Le puy de Dôme est accessible toute l'année en train à crémaillère. Le Panoramique des Dômes vous emmène au sommet en 15 minutes et vous dévoile un panorama exceptionnel. À quelques minutes seulement de Clermont-Ferrand, proche de Vulcania, le puy de Dôme est un spot de nature aux portes de la ville. La gare de départ se situe sur la commune d'Orcines, au pied du volcan. Deux chemins de randonnée permettent également aux marcheurs de rejoindre le sommet du puy de Dôme : le chemin des Muletiers et le Chemin des chèvres. À pied ou en train, le puy de Dôme est accessible toute l'année ! Point culminant de la Chaîne des Puys, le Puy de Dôme offre une vue exceptionnelle sur les volcans endormis et leur alignement parfait",
        difficultyRating: 4,
        duration: 3,
        lengthMeters: 10,
        steps: [], // Todo : Mettre interface Step
        idCreator: "ofjof",
        picture: "puy-de-dome.jpg",
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
        picture: "puy-de-la-vache.jpg"
      },
    ];


  }

  ngOnInit() {
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);

    if (!this.user) {
      this.router.navigate(["/login"]);
    }
  }

}
