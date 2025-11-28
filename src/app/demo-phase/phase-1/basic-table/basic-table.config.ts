import { SuperTableConfig } from "../../../../project/super-table/super-table.types";


export const BASIC_TABLE_CONFIG: SuperTableConfig = {
  title: 'Basic Table — Customers',
  columns: [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name' },
    { field: 'country', header: 'Country' },
    { field: 'company', header: 'Company' },
    { field: 'representative', header: 'Representative' },
    { field: 'status', header: 'Status' },
    
  ],
//   pagination: { enabled: true, rows: 10, rowsPerPageOptions: [10, 20, 50] },
  sort: { enabled: false },
  striped: true
};
