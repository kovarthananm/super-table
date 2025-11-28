import { SuperTableConfig } from "../../../../project/super-table/super-table.types";

export const TEMPLATING_TABLE_CONFIG: SuperTableConfig = {
  title: "Templating Example",

  columns: [
    {
      field: "name",
      header: "Name",
      width: "180px"
    },
    {
      field: "country",
      header: "Country",
      width: "140px"
    },
    {
      field: "company",
      header: "Company",
      width: "160px"
    },
    {
      field: "representative",
      header: "Representative",
      width: "200px",
      type: "template",
      cellTemplate: "repTpl"
    },
    {
      field: "status",
      header: "Status",
      width: "140px",
      type: "template",
      cellTemplate: "statusTpl"
    },
    {
      field: "date",
      header: "Date",
      width: "150px",
      type: "template",
      cellTemplate: "dateTpl"
    }
  ]
};
