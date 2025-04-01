import { Component, Output, EventEmitter } from '@angular/core';

export interface FilterCriteria {
  rooms: number[];     
  minArea: number | null;
  maxArea: number | null;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  roomOptions: number[] = [1, 2, 3, 4];

  selectedRooms: number[] = [];      
  minArea: number | null = null;      
  maxArea: number | null = null;       

  @Output() filterChange = new EventEmitter<FilterCriteria>();

  onRoomCheckboxChange(room: number, checked: boolean): void {
    if (checked) {
      if (!this.selectedRooms.includes(room)) {
        this.selectedRooms.push(room);
      }
    } else {
      this.selectedRooms = this.selectedRooms.filter(r => r !== room);
    }
    this.emitFilters();
  }
 
  onMinAreaChange(value: string): void {
    this.minArea = value ? parseFloat(value) : null;
    this.emitFilters();
  }
  onMaxAreaChange(value: string): void {
    this.maxArea = value ? parseFloat(value) : null;
    this.emitFilters();
  }

  private emitFilters(): void {
    const criteria: FilterCriteria = {
      rooms: this.selectedRooms,
      minArea: this.minArea,
      maxArea: this.maxArea
    };
    this.filterChange.emit(criteria);
  }
}
