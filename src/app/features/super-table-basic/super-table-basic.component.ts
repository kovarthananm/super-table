import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTableComponent } from '../../../project/super-table/super-table.component';
import { SuperTableConfig } from '../../../project/super-table/super-table.types';

@Component({
  selector: 'app-super-table-basic',
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  templateUrl: './super-table-basic.component.html',
})
export class SuperTableBasicComponent {

  data = [
    { name: 'John', country: 'USA' },
    { name: 'Maria', country: 'Brazil' },
    { name: 'Ravi', country: 'India' }
  ];

  config: SuperTableConfig = {
    title: 'Basic Table',
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'country', header: 'Country' }
    ],
    pagination: { enabled: false },
    sort: { multiple: false },
  };
}
