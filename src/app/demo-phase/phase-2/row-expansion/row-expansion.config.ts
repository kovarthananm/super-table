import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const ROW_EXPANSION_CONFIG: SuperTableConfig = {
title: "Row Expansion Demo",

columns: [
{ field: "id", header: "Id", width: "120px" },
{ field: "name", header: "Name", width: "200px" },
{ field: "category", header: "Category", width: "160px" },
{ field: "price", header: "Price", width: "120px" }
],

rowExpansion: {
enabled: true,
template: "expansionTemplate" // must match a TemplateRef key
}
};
