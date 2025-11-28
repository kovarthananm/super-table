import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperTableComponent } from "../../../project/super-table/super-table.component";
import { FormsModule } from "@angular/forms";
import { TableModule } from 'primeng/table';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: "phase2-column-reorder-demo",
  standalone: true,
  imports: [CommonModule, SuperTableComponent, FormsModule, TableModule, DragDropModule],
  template: `
    <div style="margin-bottom: 16px;">
      
      
    </div>

    <super-table #tableComponent
      [config]="table.config"
      [data]="table.data"
      >
    </super-table>
  `,
})
export default class Phase2ColumnReorderDemoPage {

  resizeMode: 'fit' | 'expand' | 'scroll' = 'fit';
//   reorderColumns = true;
  reorderRows = true;

  table = {
    config: {
      title: "Column Resize & Reorder Demo",

      columns: [
        { field: 'id', header: 'ID', width: '80px' },
        { field: 'name', header: 'Name', width: '180px' },
        { field: 'category', header: 'Category', width: '150px' },
        { field: 'price', header: 'Price', width: '100px', align: 'right' as const },
        { field: 'inventory', header: 'Inventory', width: '100px', align: 'right' as const },
        { field: 'rating', header: 'Rating', width: '100px', align: 'center' as const },
        { field: 'status', header: 'Status', width: '120px', align: 'center' as const },
      ],

      resize: {
        enabled: true,
        mode: this.resizeMode // default, will be updated by dropdown
      },

      scroll: { enabled: true, height: '400px', width: '100%' },

      pagination: { enabled: true, rows: 5, rowsPerPageOptions: [5, 10, 20] },

    //   sort: { enabled: true, multiple: false, defaultSort: [{ field: 'id', order: 1 }] },

    //   selection: { enabled: true, mode: 'multiple' as const, showColumn: true },

    //   editable: { enabled: true, mode: 'row' as const },

      reorder: {
        // columns: true,
        rows: true
      }
    },

    data: [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inventory: 50, rating: 4.5, status: 'Active' },
      { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, inventory: 150, rating: 4.2, status: 'Active' },
      { id: 3, name: 'Chair', category: 'Furniture', price: 150, inventory: 200, rating: 4.0, status: 'Inactive' },
      { id: 4, name: 'Desk', category: 'Furniture', price: 300, inventory: 100, rating: 4.3, status: 'Active' },
      { id: 5, name: 'Headphones', category: 'Electronics', price: 200, inventory: 120, rating: 4.6, status: 'Active' },
      { id: 6, name: 'Notebook', category: 'Stationery', price: 5, inventory: 500, rating: 4.1, status: 'Active' },
      { id: 7, name: 'Pen', category: 'Stationery', price: 2, inventory: 1000, rating: 4.0, status: 'Inactive' },
    ]
  };

  applyResizeMode() {
    if (this.resizeMode === 'fit') {
      this.table.config.resize.mode = 'fit';
      this.table.config.scroll.enabled = false;
    } else if (this.resizeMode === 'expand') {
      this.table.config.resize.mode = this.resizeMode;
      this.table.config.scroll.enabled = false;
    } else if (this.resizeMode === 'scroll') {
      this.table.config.resize.mode = 'fit';
      this.table.config.scroll.enabled = true;
    }
  }

  applyReorder() {
    // this.table.config.reorder.columns = this.reorderColumns;
    this.table.config.reorder.rows = this.reorderRows;
  }

  
}
