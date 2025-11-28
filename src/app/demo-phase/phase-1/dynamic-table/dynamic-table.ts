import { Component } from '@angular/core';
import { DYNAMIC_TABLE_CONFIG } from './dynamic-table.config';
import { DYNAMIC_TABLE_DATA_PRODUCTS } from './dynamic-table.data';
import { SuperTableComponent } from '../../../../project/super-table/super-table.component';

export const DYNAMIC_TABLE = {
  config: DYNAMIC_TABLE_CONFIG,
  data: DYNAMIC_TABLE_DATA_PRODUCTS
};

@Component({
  selector: 'phase1-dynamic-table-page',
  standalone: true,
  imports: [SuperTableComponent],
  template: `<super-table [config]="B.config" [data]="B.data"></super-table>`
})
export default class Phase1DynamicTablePage {
  B = DYNAMIC_TABLE;
}
