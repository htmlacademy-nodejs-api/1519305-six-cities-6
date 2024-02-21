import { City, Property, Conveniences, Location } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public publishedDate: Date;
  public city: City;
  public preview: string;
  public photos: string[];
  public premium: boolean;
  public favorite: boolean;
  public rating: number;
  public property: Property;
  public roomsCount: number;
  public guestsCount: number;
  public price: number;
  public conveniences: Conveniences[];
  public author: string;
  public commentsCount: number;
  public location: Location;
}