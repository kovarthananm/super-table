import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const SEARCH_TABLE_CONFIG: SuperTableConfig = {
  title: 'Search Example',
  globalSearch: true,  
  columns: [
    { field: 'id', header: 'ID', width: '80px', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filter: { type: 'text', displayMode: 'row' } },
    { field: 'country', header: 'Country', filter: { type: 'text', displayMode: 'row' } },
    { field: 'company', header: 'Company', filter: { type: 'text', displayMode: 'row' } },
    { field: 'representative', header: 'Representative' },
    { field: 'status', header: 'Status' },
    { field: 'date', header: 'Date', sortable: true }
  ],
//   pagination: { enabled: true, rows: 10, rowsPerPageOptions: [10, 25, 50] },
//   sort: { enabled: true },
  striped: true
};
