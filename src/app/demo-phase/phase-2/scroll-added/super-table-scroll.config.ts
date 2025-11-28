import { SuperTableConfig } from "../../../../project/super-table/super-table.types";
import { PH1_PRODUCTS } from "../../../core/data/products.data";

export const SCROLL_CONFIG: SuperTableConfig = {
  title: "Scrolling Table",

  columns: [
    { field: 'orderId', header: 'Order ID', width: '140px', sortable: true },
    { field: 'customer', header: 'Customer', sortable: true, filter: { type: 'text', displayMode: 'row' } },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
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

  scroll: {
    enabled: true,

    // TEST DIFFERENT MODES:
    height: "200px",           // vertical scrolling
    // flexHeight: true,          // adaptive height
    width: "200px",              // horizontal scroll
  },

  pagination: {
    enabled: true,
    rows: 10,
    rowsPerPageOptions: [5, 10, 20],
  },
};
