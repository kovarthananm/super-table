import { Component } from '@angular/core';
import { BASIC_TABLE } from './basic-table';
import { SuperTableComponent } from '../../../../project/super-table/super-table.component';

@Component({
  selector: 'phase1-basic-page',
  standalone: true,
  imports: [SuperTableComponent],
  template: `<super-table [config]="B.config" [data]="B.data"></super-table>`
})
export default class Phase1BasicPage {
  B = BASIC_TABLE;
}
