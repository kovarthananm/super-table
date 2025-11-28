import { Component } from "@angular/core";
import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_ORDERS } from "../../../core/data/orders.data";
import { PH1_CUSTOMERS } from "../../../core/data/customers.data";
import { SEARCH_TABLE_CONFIG } from "./search-table.config";


export const SEARCH_TABLE_DATA_CUSTOMERS = PH1_CUSTOMERS;


export const SEARCH_TABLE = {
  config: SEARCH_TABLE_CONFIG,
  data: SEARCH_TABLE_DATA_CUSTOMERS
};

@Component({
  selector: 'phase1-search-table-page',
  standalone: true,
  imports: [SuperTableComponent],
  template: `<super-table [config]="B.config" [data]="B.data"></super-table>`
})
export default class Phase1SearchTablePage {
  B = SEARCH_TABLE;
}