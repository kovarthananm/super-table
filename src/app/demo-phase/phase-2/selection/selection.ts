import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../../core/data/products.data";

import { SELECTION_CONFIG } from "./selection.config";

export const SELECTION_DATA = PH1_PRODUCTS;

export const SELECTION = {
config: SELECTION_CONFIG,
data: SELECTION_DATA
};

@Component({
selector: "phase2-selection-page",
standalone: true,
imports: [
CommonModule,
SuperTableComponent
],
template: `     <super-table        [config]="B.config"        [data]="B.data">     </super-table>
  `
})
export default class Phase2SelectionPage {
B = SELECTION;
}
