// src/app/components/apartment-list/apartment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../models/apartment.model';
import { ApartmentService } from '../../services/apartment.service';
import { FilterCriteria } from '../filter/filter.component';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  allApartments: Apartment[] = [];       // полный список квартир
  filteredApartments: Apartment[] = [];  // отфильтрованный список для отображения

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    // Получаем данные квартир из сервиса
    this.allApartments = this.apartmentService.getApartments();
    // Изначально показываем все квартиры
    this.filteredApartments = this.allApartments.slice();
  }

  // Применение фильтрации на основе полученных критериев
  applyFilter(criteria: FilterCriteria): void {
    this.filteredApartments = this.allApartments.filter((apt: Apartment) => {
      // 1. Фильтр по количеству комнат (если выбраны какие-то варианты)
      if (criteria.rooms.length > 0 && !criteria.rooms.includes(apt.rooms)) {
        return false;
      }
      // 2. Фильтр по минимальной площади (если указана)
      if (criteria.minArea !== null && apt.area < criteria.minArea) {
        return false;
      }
      // 3. Фильтр по максимальной площади (если указана)
      if (criteria.maxArea !== null && apt.area > criteria.maxArea) {
        return false;
      }
      return true;  // проходит все условия
    });
  }
}
