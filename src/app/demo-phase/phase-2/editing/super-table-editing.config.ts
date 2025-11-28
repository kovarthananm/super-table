import { SuperTableConfig } from "../../../../project/super-table/super-table.types";
import { PH1_PRODUCTS } from "../../../core/data/products.data";

export const EDITING_CONFIG: SuperTableConfig = {
  title: "Editable Table",
  columns: [
    { field: "id", header: "ID", width: "100px" },
    { field: "name", header: "Name", width: "200px" },
    { field: "category", header: "Category", width: "150px" },
    { field: "price", header: "Price", width: "120px" },
  ],
  pagination: {
    enabled: true,
    rows: 5,
    rowsPerPageOptions: [5, 10, 20],
  },
  editable: {
    enabled: true,
    mode: "row", // change to 'cell' to test cell editing
  },
};
