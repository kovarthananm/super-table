import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperTableComponent } from "../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../core/data/products.data";

@Component({
  selector: "phase2-rowspan-demo",
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  template: `
    <super-table
      [config]="table.config"
      [data]="table.data">
    </super-table>
  `,
})
export default class Phase2RowspanDemoPage {

  table = {
    config: {
      title: "Row Group / RowSpan Demo",

      columns: [
        { field: 'category', header: 'Category', width: '150px' },
        { field: 'id', header: 'Product ID', width: '120px' },
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'price', header: 'Price', width: '100px' },
        { field: 'inventory', header: 'Inventory', width: '100px' },
      ],

      scroll: {
        enabled: true,
        height: "400px",
        width: "100%",
      },

      pagination: {
        enabled: false
      },

      // Row Group Config
      rowGroup: {
        enabled: true,
        field: 'category',
        mode: 'rowspan' as const // will compute rowspan for 'category' column
      }
    },

    data: PH1_PRODUCTS
  };
}
