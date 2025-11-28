import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const SORTING_TABLE_CONFIG: SuperTableConfig = {
  title: 'Sorting Example — Orders',
  columns: [
    { field: 'orderId', header: 'Order ID', width: '140px', sortable: true },
    { field: 'customer', header: 'Customer', sortable: true, filter: { type: 'text', displayMode: 'row' } },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'status', header: 'Status', filter: { type: 'dropdown', displayMode: 'row', options: [
      { label: 'Delivered', value: 'Delivered' },
      { label: 'Processing', value: 'Processing' },
      { label: 'Shipped', value: 'Shipped' },
      { label: 'Cancelled', value: 'Cancelled' }
    ] } },
    { field: 'date', header: 'Date', sortable: true },
    { field: 'country', header: 'Country' }
  ],
//   pagination: { enabled: true, rows: 10, rowsPerPageOptions: [10, 20, 50] },
  sort: { enabled: true, multiple: true, defaultSort: [{ field: 'date', order: -1 }] },
  striped: true
};
