import {IStep} from './step.definitions';

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
