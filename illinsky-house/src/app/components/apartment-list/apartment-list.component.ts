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
  allApartments: Apartment[] = [];       
  filteredApartments: Apartment[] = []; 

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.allApartments = this.apartmentService.getApartments();
    this.filteredApartments = this.allApartments.slice();
  }
  applyFilter(criteria: FilterCriteria): void {
    this.filteredApartments = this.allApartments.filter((apt: Apartment) => {
      if (criteria.rooms.length > 0 && !criteria.rooms.includes(apt.rooms)) {
        return false;
      }
      if (criteria.minArea !== null && apt.area < criteria.minArea) {
        return false;
      }
      if (criteria.maxArea !== null && apt.area > criteria.maxArea) {
        return false;
      }
      return true; 
    });
  }
}
