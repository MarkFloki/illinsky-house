// src/app/services/apartment.service.ts
import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  // Статический mock-список квартир
  private apartments: Apartment[] = [
    {
      id: 1,
      title: 'Квартира 1K8, секция 5',
      rooms: 1,
      area: 56.9,
      price: 75000,
      imageUrl: 'assets/img/placeholder.png'  // условный путь к картинке
    },
    {
      id: 2,
      title: 'Квартира 2B4, секция 3',
      rooms: 2,
      area: 72.5,
      price: 105000,
      imageUrl: 'assets/img/placeholder.png'
    },
    {
      id: 3,
      title: 'Квартира 3A1, секция 4',
      rooms: 3,
      area: 98.0,
      price: 150000,
      imageUrl: 'assets/img/placeholder.png'
    },
    {
      id: 4,
      title: 'Квартира 4C2, секция 6',
      rooms: 4,
      area: 120.5,
      price: 200000,
      imageUrl: 'assets/img/placeholder.png'
    },
    {
      id: 5,
      title: 'Квартира 1K9, секция 5',
      rooms: 1,
      area: 48.6,
      price: 68000,
      imageUrl: 'assets/img/placeholder.png'
    },
    {
      id: 6,
      title: 'Квартира 2K10, секция 5',
      rooms: 2,
      area: 92.8,
      price: 130000,
      imageUrl: 'assets/img/placeholder.png'
    }
    // ... можно добавить больше квартир для примера
  ];

  // Метод получения всех квартир (в реальности мог быть HTTP запрос)
  getApartments(): Apartment[] {
    return this.apartments;
  }
}
