import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-table-sorting',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './super-table-sorting.component.html'
})
export class SuperTableSortingComponent {
  people = [
    { name: 'John', country: 'USA' },
    { name: 'Maria', country: 'Brazil' },
    { name: 'Ravi', country: 'India' }
  ];

  cols = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'country', header: 'Country', sortable: true },
  ];
}
