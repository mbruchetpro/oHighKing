export interface IHiking {
  id: string;
  title: string;
  address: string;
  description: string;
  difficultyRating: number;
  duration: number;
  lengthMeters: number;
  steps: any; // Todo : Mettre interface Step
  idCreator: string;
}