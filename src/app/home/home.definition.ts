export interface IHiking {
  id: string;
  title: string;
  address: string;
  description: string;
  difficultyRating: number;
  duration: number;
  lengthMeters: number;
  steps: IStep[];
  idCreator: string;
  picture: string;
}

export interface IStep {
  id: number;
  validate: boolean;
  geolocation: IGeolocation;
}

export interface IGeolocation {
  longitude: number;
  latitude: number;
}
