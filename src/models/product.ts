import {Timestamp} from './common';

export interface Product extends Timestamp {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  sortDescription: string;
  categoryId: number;
  type: number;
}
