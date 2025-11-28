import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const SELECTION_CONFIG: SuperTableConfig = {
title: "Selection Demo",

columns: [
{ field: "id", header: "Id", width: "120px" },
{ field: "name", header: "Name", width: "200px" },
{ field: "category", header: "Category", width: "160px" },
{ field: "price", header: "Price", width: "120px" }
],

selection: {
enabled: true,
mode: "multiple",  // single | multiple
showColumn: true,  // shows checkbox/radio column
columnTrigger: "id" // optional: used for column-trigger selection
}
};
