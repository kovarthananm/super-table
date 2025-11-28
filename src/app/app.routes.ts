import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BasicComponent } from './features/basic/basic.component';
import { SuperTableBasicComponent } from './features/super-table-basic/super-table-basic.component';
import { SuperTableDynamicComponent } from './features/super-table-dynamic/super-table-dynamic.component';
import { SuperTableSortingComponent } from './features/super-table-dynamic/super-table-sorting.component';
import Phase1BasicPage from './demo-phase/phase-1/basic-table/basic-table-page';
import Phase1DynamicTablePage from './demo-phase/phase-1/dynamic-table/dynamic-table';
import Phase1SortingTablePage from './demo-phase/phase-1/sorting-table/sorting-table';
import Phase1SearchTablePage from './demo-phase/phase-1/search-table/search-table';
import Phase2TemplatingTablePage from './demo-phase/phase-2/templating/templating';
import Phase2PaginationBasicPage from './demo-phase/phase-2/pagination/pagination-basic';
import Phase2PaginationSortingPage from './demo-phase/phase-2/pagination-sorting/pagination-sorting';
import Phase2SearchSortPaginationPage from './demo-phase/phase-2/search-sorting-pagination/search-sorting-pagination';
import Phase2SelectionPage from './demo-phase/phase-2/selection/selection';
import Phase2RowExpansionPage from './demo-phase/phase-2/row-expansion/row-expansion';
import Phase2EditingPage from './demo-phase/phase-2/editing/super-table-editing.page';
import Phase2ScrollPage from './demo-phase/phase-2/scroll-added/phase2-scroll-page';
import Phase2FrozenPage from './demo-phase/phase-2/frozen-config';
import Phase2FrozenDemoPage from './demo-phase/phase-2/frozen-config';
import Phase2ColumnGroupDemoPage from './demo-phase/phase-2/colgroup-config';
import Phase2RowspanDemoPage from './demo-phase/phase-2/row-group.config';
import Phase2ColumnResizeDemoPage from './demo-phase/phase-2/resize.config';
import Phase2ReorderDemoPage from './demo-phase/phase-2/reorder.config';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'basic', component: BasicComponent },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ]
  },
  {
    path: 'super-table-basic',
    component: LayoutComponent,
    children: [
      
      { path: 'basic-table', component: Phase1BasicPage },
      { path: 'dynamic-table', component: Phase1DynamicTablePage },
      { path: 'sorting-table', component: Phase1SortingTablePage },
      { path: 'search-table', component: Phase1SearchTablePage },
      { path: 'templating', component: Phase2TemplatingTablePage },
      { path: 'pagination', component: Phase2PaginationBasicPage },
      { path: 'pagination-sort', component: Phase2PaginationSortingPage },
      { path: 'search-sort-page', component: Phase2SearchSortPaginationPage },
      { path: 'selection', component: Phase2SelectionPage },
      { path: 'row-expansion', component: Phase2RowExpansionPage },
      { path: 'edit-option', component: Phase2EditingPage },
      { path: 'scroll-test', component: Phase2ScrollPage },
      { path: 'frozen-page', component: Phase2FrozenDemoPage },
      { path: 'column-group', component: Phase2ColumnGroupDemoPage },
      { path: 'row-span', component: Phase2RowspanDemoPage },
      { path: 'column-resize', component: Phase2ColumnResizeDemoPage },
      { path: 'reorder-column', component: Phase2ReorderDemoPage },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ]
}
//   },
//   {
//   path: 'super-table-basic',
//   loadComponent: () =>
//     import('./features/super-table-basic/super-table-basic.component').then(
//       m => m.SuperTableBasicComponent
//     )
// }

];
