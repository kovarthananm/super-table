import { TemplateRef } from "@angular/core";

export type FilterType = 'text' | 'number' | 'date' | 'dropdown';

// Filtering modes supported by PrimeNG
export type FilterMode = 'contains' | 'equals' | 'startsWith' | 'endsWith' | 'in';

// Unified filter configuration
export interface SuperFilter {
  type: FilterType;
  options?: any[];                 // only for dropdown
  matchMode?: FilterMode;
  displayMode?: 'row' | 'menu';
}

// Column definition
export interface SuperColumn {
  field: string;
  header: string;
  width?: string;
  sortable?: boolean;

  filter?: SuperFilter;  
  
  template?: TemplateRef<any>; // unified filter object

  /**
   * Frozen: 'left' | 'right'
   * If undefined -> normal non-frozen column
   */
  frozen?: 'left' | 'right';

  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'boolean' | 'template';
  styleClass?: string;

  /**
   * Template names provided via <ng-template #cellName>
   */
  cellTemplate?: string;
  headerTemplate?: string;
}

export interface SuperTableSelection {
  enabled: boolean;
  mode: 'single' | 'multiple';
  columnTrigger?: string;      // field for click selection
  showColumn?: boolean;        // show checkbox/radio column
}

export interface SuperTableRowGroup {
  enabled: boolean;
  field: string;       // field to group by
  mode: 'subheader' | 'rowspan';
}

export interface SuperTableConfig {
  title?: string;

  columns: SuperColumn[];

  globalSearch?: boolean;
  striped?: boolean;
  bordered?: boolean;
  dense?: boolean;

  frozen?: boolean;

  pagination?: {
    enabled: boolean;
    rows?: number;
    rowsPerPageOptions?: number[];
  };

  sort?: {
    enabled?: boolean;
    multiple?: boolean;
    defaultSort?: {
      field: string;
      order: 1 | -1;
    }[];
  };

  frozenColumns?: {
    left?: number;
    right?: number;
  };

  frozenRows?: {
    top?: number;
    bottom?: number;
  };

  selection?: SuperTableSelection;

  scroll?: {
    enabled: boolean;
    height?: string;
    width?: string;
    flexHeight?: boolean;
    frozenWidth?: string;
  };

  editable?: {
    enabled: boolean;
    mode: 'row' | 'cell';
  };

  rowExpansion?: {
    enabled: boolean;
    template?: string;
  };

  rowStyle?: (rowData: any) => Record<string, string>;

  contextMenu?: boolean;
  exportCSV?: boolean;

  /**
   * NEW: Column Groups
   * Each item represents a row of group headers
   */
  columnGroups?: Array<Array<{
    header: string;
    colspan?: number;
    rowspan?: number;
    styleClass?: string;
    align?: 'left' | 'center' | 'right';
  }>>;

  rowGroup?: SuperTableRowGroup;

  resize?: {
    enabled: boolean;
    mode?: 'fit' | 'expand' | 'scroll';
  }

  reorder?: {
    columns?: boolean;
    rows?: boolean;
  };

}


// Standardized library input
export interface SuperTableInput {
  config: SuperTableConfig;
  data: any[];
}
