// src/app/components/filter/filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

export interface FilterCriteria {
  rooms: number[];       // выбранные количества комнат
  minArea: number | null;
  maxArea: number | null;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // Возможные варианты комнат для чекбоксов
  roomOptions: number[] = [1, 2, 3, 4];

  // Модель состояния фильтров
  selectedRooms: number[] = [];        // список отмеченных вариантов комнат
  minArea: number | null = null;       // минимальная площадь (null = не задано)
  maxArea: number | null = null;       // максимальная площадь (null = не задано)

  // Событие, эмитирующее текущие критерии фильтрации
  @Output() filterChange = new EventEmitter<FilterCriteria>();

  // Обработчик изменения чекбоксов по комнатам
  onRoomCheckboxChange(room: number, checked: boolean): void {
    if (checked) {
      // добавить выбранное количество комнат в массив
      if (!this.selectedRooms.includes(room)) {
        this.selectedRooms.push(room);
      }
    } else {
      // убрать из массива отменённый выбор
      this.selectedRooms = this.selectedRooms.filter(r => r !== room);
    }
    this.emitFilters();
  }

  // Обработчики изменения полей площади 
  onMinAreaChange(value: string): void {
    this.minArea = value ? parseFloat(value) : null;
    this.emitFilters();
  }
  onMaxAreaChange(value: string): void {
    this.maxArea = value ? parseFloat(value) : null;
    this.emitFilters();
  }

  // Метод для эмиссии события с текущими критериями фильтрации
  private emitFilters(): void {
    const criteria: FilterCriteria = {
      rooms: this.selectedRooms,
      minArea: this.minArea,
      maxArea: this.maxArea
    };
    this.filterChange.emit(criteria);
  }
}
