import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const DYNAMIC_TABLE_CONFIG: SuperTableConfig = {
  title: 'Dynamic Columns — Products',
  columns: [
    { field: 'id', header: 'Code', width: '120px' },
    { field: 'name', header: 'Product' },
    { field: 'category', header: 'Category' },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'inventory', header: 'Inventory' },
    { field: 'rating', header: 'Rating' },
    { field: 'supplier', header: 'Supplier' },
    { field: 'country', header: 'Country' }
  ],
//   pagination: { enabled: true, rows: 10, rowsPerPageOptions: [10, 25, 50] },
//   sort: { enabled: true, multiple: false, defaultSort: [{ field: 'name', order: 1 }] },
  striped: true
};
