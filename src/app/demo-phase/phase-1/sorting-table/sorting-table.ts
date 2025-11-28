import { Component } from "@angular/core";
import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_ORDERS } from "../../../core/data/orders.data";
import { SORTING_TABLE_CONFIG } from "./sorting-table.config";


export const SORTING_TABLE_DATA_ORDERS = PH1_ORDERS;

export const SORTING_TABLE = {
  config: SORTING_TABLE_CONFIG,
  data: SORTING_TABLE_DATA_ORDERS
};

@Component({
  selector: 'phase1-sorting-table-page',
  standalone: true,
  imports: [SuperTableComponent],
  template: `<super-table [config]="B.config" [data]="B.data"></super-table>`
})
export default class Phase1SortingTablePage {
  B = SORTING_TABLE;
}