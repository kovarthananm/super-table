import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_CUSTOMERS } from "../../../core/data/customers.data";
import { SEARCH_SORT_PAGINATION_CONFIG } from "./search-sorting-pagination.config";

export const SEARCH_SORT_PAGINATION_DATA = PH1_CUSTOMERS;

export const SEARCH_SORT_PAGINATION = {
  config: SEARCH_SORT_PAGINATION_CONFIG,
  data: SEARCH_SORT_PAGINATION_DATA
};

@Component({
  selector: "phase2-search-sort-pagination-page",
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  template: `
    <super-table
      [config]="B.config"
      [data]="B.data">
    </super-table>
  `
})
export default class Phase2SearchSortPaginationPage {
  B = SEARCH_SORT_PAGINATION;
}
