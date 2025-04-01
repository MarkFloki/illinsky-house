// src/app/components/apartment-card/apartment-card.component.ts
import { Component, Input } from '@angular/core';
import { Apartment } from '../../models/apartment.model';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css']
})
export class ApartmentCardComponent {
  @Input() apartment!: Apartment;
}
