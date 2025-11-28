import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { SCROLL_CONFIG } from "./super-table-scroll.config";
import { PH1_ORDERS } from "../../../core/data/orders.data";

// export const SEARCH_SORT_PAGINATION = {
//   config: SEARCH_SORT_PAGINATION_CONFIG,
//   data: SEARCH_SORT_PAGINATION_DATA
// };

export const SCROLL_DATA = PH1_ORDERS;

export const SCROLL_TABLE = {
  config: SCROLL_CONFIG,
  data: SCROLL_DATA
};

@Component({
  selector: "phase2-scroll-page",
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  template: `
    <super-table
      [config]="B.config"
      [data]="B.data">
    </super-table>
  `,
})
export default class Phase2ScrollPage {
  B = SCROLL_TABLE;
}
