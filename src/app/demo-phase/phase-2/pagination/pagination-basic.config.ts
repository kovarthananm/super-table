import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const PAGINATION_BASIC_CONFIG: SuperTableConfig = {
  title: "Basic Pagination",

  columns: [
    { field: "name", header: "Name", width: "180px" },
    { field: "country", header: "Country", width: "150px" },
    { field: "company", header: "Company", width: "180px" },
    { field: "status", header: "Status", width: "120px" }
  ],

  pagination: {
    enabled: true,
    rows: 10,
    rowsPerPageOptions: [10, 20, 50]
  }
};
