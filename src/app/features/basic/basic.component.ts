import { Component } from '@angular/core';
import { SuperTableComponent } from '../../../project/super-table';

@Component({
  standalone: true,
  selector: 'app-basic',
  imports: [SuperTableComponent],
  templateUrl: './basic.component.html'
})
export class BasicComponent {

  config = {
    title: 'Basic Table',
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'country', header: 'Country' }
    ]
  };

  data = [
    { name: 'John', country: 'USA' },
    { name: 'Maria', country: 'Brazil' },
    { name: 'Ravi', country: 'India' }
  ];

}
