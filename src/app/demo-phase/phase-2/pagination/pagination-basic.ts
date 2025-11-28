import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_CUSTOMERS } from "../../../core/data/customers.data";

import { PAGINATION_BASIC_CONFIG } from "./pagination-basic.config";

export const PAGINATION_BASIC_DATA = PH1_CUSTOMERS;

export const PAGINATION_BASIC = {
  config: PAGINATION_BASIC_CONFIG,
  data: PAGINATION_BASIC_DATA
};

@Component({
  selector: "phase2-pagination-basic-page",
  standalone: true,
  imports: [
    CommonModule,
    SuperTableComponent
  ],
  template: `
    <super-table 
      [config]="B.config" 
      [data]="B.data">
    </super-table>
  `
})
export default class Phase2PaginationBasicPage {
  B = PAGINATION_BASIC;
}
