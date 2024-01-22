import { City } from './city.enum.js';
import { Property } from './property.enum.js';
import { Conveniences } from './conveniences.enum.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  publishedDate: Date;
  city: City;
  preview: string;
  photos: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  property: Property;
  roomsCount: number;
  guestsCount: number;
  price: number;
  facilities: Conveniences[];
  author: User;
  commentsCount: number;
  location: {
    latitude: number,
    longitude: number
  };
}
