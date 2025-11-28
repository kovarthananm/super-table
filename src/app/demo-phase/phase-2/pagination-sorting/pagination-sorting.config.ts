import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const PAGINATION_SORTING_CONFIG: SuperTableConfig = {
  title: "Pagination + Sorting",

  columns: [
    { field: "id", header: "Id", width: "120px", sortable: true },
    { field: "name", header: "Name", width: "200px", sortable: true },
    { field: "category", header: "Category", width: "160px", sortable: true },
    { field: "price", header: "Price", width: "120px", sortable: true }
  ],

  pagination: {
    enabled: true,
    rows: 10,
    rowsPerPageOptions: [10, 20, 50]
  },

  sort: {
    multiple: false,
    defaultSort: [
      { field: "name", order: 1 } // ascending
    ]
  }
};
