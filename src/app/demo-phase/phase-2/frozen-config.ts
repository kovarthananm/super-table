import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperTableComponent } from "../../../project/super-table/super-table.component";
import { PH1_PRODUCTS } from "../../core/data/products.data";



@Component({
    selector: "phase2-frozen-demo-page",
    standalone: true,
    imports: [CommonModule, SuperTableComponent],
    template: `
    <super-table
      [config]="table.config"
      [data]="table.data">
    </super-table>
  `,
})
export default class Phase2FrozenDemoPage {

    table = {
        config: {
    title: "Frozen Rows & Columns Demo",

    columns: [
        { field: 'id', header: 'Product ID', width: '150px', frozen: 'left' as const},
        { field: 'name', header: 'Name', width: '200px', frozen: 'left'  as const},
        { field: 'category', header: 'Category', width: '150px' },
        { field: 'price', header: 'Price', width: '120px' },
        { field: 'inventory', header: 'Inventory', width: '130px' },
        { field: 'rating', header: 'Rating', width: '100px' },
        { field: 'supplier', header: 'Supplier', width: '180px' },
        { field: 'country', header: 'Country', width: '150px', frozen: 'right'  as const},
    ],

    scroll: {
        enabled: true,
        height: "400px",
        width: "100%"
    },

    frozenRows: {
        top: 1
    },

    pagination: {
        enabled: false
    },

    sort: {
        enabled: true,
        multiple: false
    },

    selection: {
        enabled: true,
        mode: 'single' as const,
        showColumn: true
    }
},


        data: PH1_PRODUCTS
    };
}
