import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SuperTableComponent, SuperTableConfig } from '../../../project/super-table';

interface Customer {
  name: string;
  country: string;
  age: number;
}

@Component({
  selector: 'app-super-table-dynamic',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule, InputTextModule, SuperTableComponent],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './super-table-dynamic.component.html',
  styleUrls: ['./super-table-dynamic.component.scss']
})
export class SuperTableDynamicComponent {

  data: Customer[] = [
    { name: 'John', country: 'USA', age: 28 },
    { name: 'Maria', country: 'Brazil', age: 32 },
    { name: 'Ravi', country: 'India', age: 24 },
    { name: 'Chen', country: 'China', age: 30 },
    { name: 'Aisha', country: 'UAE', age: 27 },
  ];

  


  config: SuperTableConfig = {
      title: 'SuperTable – Sorting + Pagination + Filtering Demo',
      columns :[
        { field: 'name', header: 'Name', sortable: true, filter: {type: 'text'} },
        { field: 'country', header: 'Country', sortable: true, filter: {type: 'text'} },
        { field: 'age', header: 'Age', sortable: true, filter: {type: 'number'} }
    ],
      pagination: { enabled: true, rows: 3, rowsPerPageOptions: [3, 5, 10] },
      sort: { multiple: false },
    };
}
