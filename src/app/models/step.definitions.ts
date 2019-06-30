import {IGeolocation} from './geolocation.definitions';

export interface IStep {
    id: number;
    validate: boolean;
    geolocation: IGeolocation;
}
