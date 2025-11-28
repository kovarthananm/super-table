import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperTableComponent } from "../../../project/super-table/super-table.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "phase2-column-resize-demo",
  standalone: true,
  imports: [CommonModule, SuperTableComponent, FormsModule],
  template: `
    <super-table
      [config]="table.config"
      [data]="table.data">
    </super-table>
  `,
})
export default class Phase2ColumnResizeDemoPage {

  resizeMode: 'fit' | 'expand' | 'scroll' = 'fit';

  table = {
    config: {
      title: "Column Resize Modes Demo",

      columns: [
        { field: 'id', header: 'ID', width: '120px' },
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'category', header: 'Category', width: '150px' },
        { field: 'price', header: 'Price', width: '120px' },
        { field: 'stock', header: 'Stock', width: '120px' },
        { field: 'supplier', header: 'Supplier', width: '180px' },
        { field: 'rating', header: 'Rating', width: '120px' },
      ],

      resize: {
        enabled: true,
        mode: this.resizeMode // default, will be overwritten by dropdown
      },

      scroll: {
        enabled: true,
        height: "400px",
        width: "100%"
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
      },
    },

    data: [
      {
        id: 101, name: "Laptop X15", category: "Electronics",
        price: 55000, stock: 120, supplier: "Dell India", rating: 4.5
      },
      {
        id: 102, name: "Wireless Mouse", category: "Accessories",
        price: 799, stock: 350, supplier: "Logitech", rating: 4.2
      },
      {
        id: 103, name: "Mechanical Keyboard", category: "Accessories",
        price: 3500, stock: 80, supplier: "Keychron", rating: 4.7
      },
      {
        id: 104, name: "Air Conditioner 1.5T", category: "Home Appliances",
        price: 42000, stock: 50, supplier: "LG", rating: 4.1
      },
      {
        id: 105, name: "Smartwatch S9", category: "Wearables",
        price: 15000, stock: 200, supplier: "Samsung", rating: 4.4
      },
      {
        id: 106, name: "Gaming Monitor 27\"", category: "Electronics",
        price: 22000, stock: 30, supplier: "Acer", rating: 4.6
      },
      {
        id: 107, name: "Bluetooth Speaker", category: "Audio",
        price: 2999, stock: 150, supplier: "Boat", rating: 4.3
      }
    ]
  };

  // Update config when dropdown changes
  applyResizeMode() {
    if (this.resizeMode === 'fit') {
      this.table.config.resize.mode = 'fit';
      this.table.config.scroll.enabled = false;
    }
    else if (this.resizeMode === 'expand') {
      this.table.config.resize.mode = 'expand';
      this.table.config.scroll.enabled = false;
    }
    else if (this.resizeMode === 'scroll') {
      this.table.config.resize.mode = 'fit';
      this.table.config.scroll.enabled = true;
    }
  }
}
