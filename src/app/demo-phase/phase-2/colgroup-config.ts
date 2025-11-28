import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperTableComponent } from "../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../core/data/products.data";



@Component({
    selector: "phase2-column-group-demo-page",
    standalone: true,
    imports: [CommonModule, SuperTableComponent],
    template: `
    <super-table
      [config]="table.config"
      [data]="table.data">
    </super-table>
  `,
})
export default class Phase2ColumnGroupDemoPage {

    table = {
    config: {
    title: 'Grouped Columns Demo',
    bordered: true,
    striped: true,

    columns: [
      { field: 'id', header: 'ID', width: '100px' },
      { field: 'name', header: 'Name', width: '150px' },
      { field: 'category', header: 'Category', width: '120px' },
      { field: 'price', header: 'Price', width: '100px' },
      { field: 'inventory', header: 'Inventory', width: '120px' },
      { field: 'rating', header: 'Rating', width: '100px' },
      { field: 'reviews', header: 'Reviews', width: '100px' },
      { field: 'supplier', header: 'Supplier', width: '150px' },
      { field: 'country', header: 'Country', width: '120px' },
    ],

    columnGroups: [
      [
        { header: 'Product Info', colspan: 3, align: 'center' as const },
        { header: 'Stock & Price', colspan: 2, align: 'center' as const},
        { header: 'Supplier Info', colspan: 4, align: 'center' as const}
      ],
      [
        { header: 'ID' },
        { header: 'Name' },
        { header: 'Category' },
        { header: 'Price' },
        { header: 'Inventory' },
        { header: 'Rating' },
        { header: 'Reviews' },
        { header: 'Supplier' },
        { header: 'Country' }
      ]
    ],

    // keep all your existing configs
    pagination: { enabled: false },
    sort: { enabled: true, multiple: false },
    selection: { enabled: true, mode: 'single' as const, showColumn: true },
    scroll: { enabled: true, height: '400px', width: '100%' }
  },

  data: PH1_PRODUCTS
};

}
