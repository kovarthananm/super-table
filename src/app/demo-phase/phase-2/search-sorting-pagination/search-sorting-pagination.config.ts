import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const SEARCH_SORT_PAGINATION_CONFIG: SuperTableConfig = {
  title: "Search + Sorting + Pagination (Global Search)",

  globalSearch: true, // <-- enabled global search

  columns: [
    {
      field: "name",
      header: "Customer Name",
      sortable: true,
      filter: {
        type: "text",
        matchMode: "contains"
      }
    },
    {
      field: "country",
      header: "Country",
      sortable: true,
      filter: {
        type: "dropdown",
        options: [
          "USA",
          "India",
          "Brazil",
          "Germany",
          "Japan",
          "UK",
          "Canada"
        ]
      }
    },
    {
      field: "company",
      header: "Company",
      sortable: true,
      filter: {
        type: "text",
        matchMode: "startsWith"
      }
    },
    {
      field: "status",
      header: "Status",
      sortable: true,
      filter: {
        type: "dropdown",
        options: ["new", "qualified", "unqualified", "renewal"]
      }
    },
    {
      field: "activity",
      header: "Activity",
      sortable: true,
      filter: {
        type: "number",
        matchMode: "equals"
      },
      width: "120px",
      align: "right"
    }
  ],

  pagination: {
    enabled: true,
    rows: 10,
    rowsPerPageOptions: [10, 20, 50]
  },

  sort: {
    enabled: true,
    multiple: false,
    defaultSort: [
      { field: "name", order: 1 }
    ]
  }
};
