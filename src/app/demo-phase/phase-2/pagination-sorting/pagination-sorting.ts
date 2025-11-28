import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../../core/data/products.data";

import { PAGINATION_SORTING_CONFIG } from "./pagination-sorting.config";

export const PAGINATION_SORTING_DATA = PH1_PRODUCTS;

export const PAGINATION_SORTING = {
  config: PAGINATION_SORTING_CONFIG,
  data: PAGINATION_SORTING_DATA
};

@Component({
  selector: "phase2-pagination-sorting-page",
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
export default class Phase2PaginationSortingPage {
  B = PAGINATION_SORTING;
}
