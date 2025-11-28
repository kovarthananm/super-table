import { Component, TemplateRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuperTableComponent } from "../../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../../core/data/products.data";

import { ROW_EXPANSION_CONFIG } from "./row-expansion.config";

export const ROW_EXPANSION_DATA = PH1_PRODUCTS;

export const ROW_EXPANSION = {
config: ROW_EXPANSION_CONFIG,
data: ROW_EXPANSION_DATA
};

@Component({
selector: "phase2-row-expansion-page",
standalone: true,
imports: [
CommonModule,
SuperTableComponent
],
template: `
<ng-template #expansionTemplate let-row>

Id: {{ row.id }}
Name: {{ row.name }}
Category: {{ row.category }}
Price: {{ row.price }}




<super-table 
  [config]="B.config" 
  [data]="B.data"
  [templates]="{ expansionTemplate: expansionTemplate }">
</super-table>

`
})
export default class Phase2RowExpansionPage {
@ViewChild("expansionTemplate", { static: true }) expansionTemplate!: TemplateRef<any>;
B = ROW_EXPANSION;
}
