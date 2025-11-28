import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../../core/data/products.data";
import { EDITING_CONFIG } from "./super-table-editing.config";

export const EDITING_DATA = PH1_PRODUCTS;

export const EDITING_TABLE = {
  config: EDITING_CONFIG,
  data: EDITING_DATA
};

@Component({
  selector: "phase2-editing-page",
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  template: `
    <super-table
      [config]="B.config"
      [data]="B.data">
    </super-table>
  `,
})
export default class Phase2EditingPage {
  B = EDITING_TABLE;
}
