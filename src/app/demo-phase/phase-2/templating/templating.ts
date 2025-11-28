import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";     // ← REQUIRED
import { SuperTableComponent } from "../../../../project/super-table/super-table.component";

import { PH1_CUSTOMERS } from "../../../core/data/customers.data";
import { TEMPLATING_TABLE_CONFIG } from "./templating.config";

export const TEMPLATING_TABLE_DATA_CUSTOMERS = PH1_CUSTOMERS;

export const TEMPLATING_TABLE = {
  config: TEMPLATING_TABLE_CONFIG,
  data: TEMPLATING_TABLE_DATA_CUSTOMERS
};

@Component({
  selector: "phase2-templating-table-page",
  standalone: true,
  imports: [
    CommonModule,          // ← FIXES ngClass + date pipe
    SuperTableComponent
  ],
  template: `
<super-table 
    [config]="B.config" 
    [data]="B.data">

    <!-- Representative Template -->
    <ng-template #repTpl let-row>
      <div style="display:flex; gap:8px; align-items:center;">
        <img
          [src]="row.representative?.image"
          width="28"
          height="28"
          style="border-radius:50%"
        />
        <span>{{ row.representative?.name }}</span>
      </div>
    </ng-template>

    <!-- Status Template -->
    <ng-template #statusTpl let-row>
      <span
        [ngClass]="{
          'st-badge st-success': row.status === 'active',
          'st-badge st-warning': row.status === 'pending',
          'st-badge st-danger': row.status === 'inactive'
        }"
      >
        {{ row.status }}
      </span>
    </ng-template>

    <!-- Date Template -->
    <ng-template #dateTpl let-row>
      {{ row.date | date:'mediumDate' }}
    </ng-template>

</super-table>
  `
})
export default class Phase2TemplatingTablePage {
  B = TEMPLATING_TABLE;
}
