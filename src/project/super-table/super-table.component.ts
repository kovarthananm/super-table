import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  TemplateRef,
  ElementRef,
  Renderer2,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { SuperColumn, SuperTableConfig } from './super-table.types';

@Component({
  selector: 'super-table',
  standalone: true,
  imports: [CommonModule, TableModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})


export class SuperTableComponent implements OnDestroy {
  @Input({ required: true }) config!: SuperTableConfig;
  @Input({ required: true }) data: any[] = [];

  @Input() templates?: Record<string, TemplateRef<any>>;

  @Output() sortEvent = new EventEmitter<any>();
  @Output() pageEvent = new EventEmitter<any>();
  @Output() filterEvent = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();

  @ViewChild('table') table!: Table;


  selectedRows: any[] = [];
  private lastGroupValue: any = null;
  globalSearchValue: string = '';

  // ---------------------------
  // RESIZE state
  // ---------------------------
  private resizing = false;
  private resizeStartX = 0;
  private resizeStartWidth = 0;
  private activeColumn: SuperColumn | null = null;
  private activeThElement: HTMLElement | null = null;
  private originalTableWidth = 0;

  private boundResizeMove = (e: MouseEvent) => this.resizeMove(e);
  private boundStopResize = () => this.stopResize();

  

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.boundResizeMove);
    document.removeEventListener('mouseup', this.boundStopResize);
  }

  applyGlobalSearch() {
  this.table.filterGlobal(this.globalSearchValue, 'contains');
    }

    get globalFilterFields(): string[] {
  return this.config?.columns?.map(col => col.field) || [];
}

    

  // ---------------------------
  // BASIC GETTERS
  // ---------------------------
  get hasPagination(): boolean {
    return !!this.config?.pagination?.enabled;
  }

  get tableStyleClass(): string {
    const classes = ['st-table'];
    if (this.config?.striped) classes.push('st-striped');
    if (this.config?.bordered) classes.push('st-bordered');
    if (this.config?.dense) classes.push('st-dense');
    return classes.join(' ');
  }

  selectionMode(): 'single' | 'multiple' | undefined {
    return this.config?.selection?.enabled ? this.config.selection.mode : undefined;
  }

  get defaultSortField(): string | undefined {
    return this.config.sort?.defaultSort?.[0]?.field;
  }

  get defaultSortOrder(): number {
    return this.config.sort?.defaultSort?.[0]?.order ?? 1;
  }

  // ---------------------------
  // EVENTS
  // ---------------------------
  onSort(e: any) {
    this.sortEvent.emit(e);
  }

  onPage(e: any) {
    this.pageEvent.emit(e);
  }

  onFilter(e: any) {
    this.filterEvent.emit(e);
  }

  onSelectionChange(e: any) {
    this.selectionChange.emit(e);
  }

  onFilterInput(event: Event, cb: (value: any) => void) {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    cb(input?.value ?? '');
  }

  onSelectChange(event: Event, cb: (value: any) => void) {
    const select = event.target as HTMLSelectElement;
    cb(select?.value ?? '');
  }

  stopClick(e: Event) {
    e.stopPropagation();
  }

  // ---------------------------
  // EDITING
  // ---------------------------
  editingRows: Record<string, boolean> = {};

  isRowEditing(row: any): boolean {
    if (this.config.editable?.mode !== 'row') return false;
    return !!this.editingRows[row.id];
  }

  startRowEdit(row: any) {
    if (this.config.editable?.mode === 'row') this.editingRows[row.id] = true;
  }

  saveRowEdit(row: any) {
    if (this.config.editable?.mode === 'row') this.editingRows[row.id] = false;
  }

  cancelRowEdit(row: any) {
    if (this.config.editable?.mode === 'row') this.editingRows[row.id] = false;
  }

  // ---------------------------
  // SCROLL
  // ---------------------------
  get scrollHeightValue(): string | undefined {
    if (!this.config?.scroll?.enabled) return undefined;
    if (this.config.scroll.flexHeight) return 'flex';
    return this.config.scroll.height;
  }

  get scrollWidthValue(): string | undefined {
    return this.config?.scroll?.enabled ? this.config.scroll.width : undefined;
  }

  // ---------------------------
  // FROZEN COLUMNS & ROWS
  // ---------------------------
  get frozenLeftColumns() {
    return this.config.columns?.filter(c => c.frozen === 'left') ?? [];
  }

  get frozenRightColumns() {
    return this.config.columns?.filter(c => c.frozen === 'right') ?? [];
  }

  get unfrozenColumns() {
    return this.config.columns?.filter(c => !c.frozen) ?? [];
  }

  get frozenTopRows() {
    return this.config.frozenRows?.top ? this.data.slice(0, this.config.frozenRows.top) : [];
  }

  onRowClick(row: any, event: MouseEvent) {
    event.stopPropagation();
  }

  isRowSelected(row: any): boolean {
    return this.selectedRows?.includes(row);
  }

  isSubheader(row: any, index: number): boolean {
    if (!this.config.rowGroup || this.config.rowGroup.mode !== 'subheader') return false;
    const field = this.config.rowGroup.field;
    const isNewGroup = this.lastGroupValue !== row[field];
    if (isNewGroup) this.lastGroupValue = row[field];
    return isNewGroup;
  }

  getGroupLabel(row: any): string {
    const field = this.config.rowGroup?.field;
    return field ? `${field}: ${row[field]}` : '';
  }

  getRowSpan(row: any, col: SuperColumn): number | null {
    if (!this.config.rowGroup || this.config.rowGroup?.mode !== 'rowspan') return null;
    const groupField = this.config.rowGroup.field;
    if (!groupField || col.field !== groupField) return null;

    const rows = this.data;
    const groupValue = row[groupField];
    const firstIndex = rows.findIndex(r => r[groupField] === groupValue);
    if (firstIndex !== rows.indexOf(row)) return null;

    return rows.filter(r => r[groupField] === groupValue).length;
  }

  // ---------------------------
  // COLUMN RESIZE
  // ---------------------------
  startResize(event: MouseEvent, column: SuperColumn, target?: EventTarget | null) {
    if (!this.config?.resize?.enabled) return;

    event.preventDefault();
    event.stopPropagation();
    if (!column) return;

    this.resizing = true;
    this.activeColumn = column;
    this.activeThElement = this.findClosestTh(target as HTMLElement);
    this.resizeStartX = event.pageX;

    const parsedWidth = parseInt((column.width ?? '').toString(), 10);
    this.resizeStartWidth = !isNaN(parsedWidth) && parsedWidth > 0
      ? parsedWidth
      : this.activeThElement?.offsetWidth ?? 120;

    this.originalTableWidth = this.getTableElement()?.offsetWidth ?? 0;

    document.addEventListener('mousemove', this.boundResizeMove);
    document.addEventListener('mouseup', this.boundStopResize);
  }

  private resizeMove(e: MouseEvent) {
    if (!this.resizing || !this.activeColumn) return;

    const diff = e.pageX - this.resizeStartX;
    let newWidth = Math.max(40, Math.round(this.resizeStartWidth + diff));
    this.activeColumn.width = newWidth + 'px';

    const mode = this.config?.resize?.mode ?? 'fit';
    const tableEl = this.getTableElement();

    if (!tableEl) return;

    if (mode === 'expand') {
      this.renderer.setStyle(tableEl, 'width', Math.max(100, this.originalTableWidth + diff) + 'px');
    } else if (mode === 'fit') {
      const cols = this.config.columns ?? [];
      const idx = cols.indexOf(this.activeColumn);
      const next = cols.slice(idx + 1).find(c => !c.frozen);
      if (next) {
        const nextParsed = parseInt((next.width ?? '').toString(), 10) || 100;
        next.width = Math.max(40, nextParsed - (newWidth - this.resizeStartWidth)) + 'px';
      }
    } else if (mode === 'scroll') {
      const total = (this.config.columns ?? []).reduce((sum, c) => {
        const w = parseInt((c.width ?? '').toString(), 10);
        return sum + (isNaN(w) ? 0 : w);
      }, 0);
      if (total > 0) this.renderer.setStyle(tableEl, 'width', total + 'px');
    }
  }

  private stopResize() {
    this.resizing = false;
    this.activeColumn = null;
    this.activeThElement = null;
    document.removeEventListener('mousemove', this.boundResizeMove);
    document.removeEventListener('mouseup', this.boundStopResize);
  }

  private getTableElement(): HTMLElement | null {
    return (this.host.nativeElement as HTMLElement)?.querySelector('table') ?? null;
  }

  private findClosestTh(el?: HTMLElement | null): HTMLElement | null {
  let node: HTMLElement | null = el ?? null; // ensure undefined becomes null
  while (node && node.tagName !== 'TH') {
    node = node.parentElement ?? null; // convert undefined to null
  }
  return node;
}

  applyColumnResize(event: any, col: SuperColumn) {
    if (!this.config.resize?.enabled) return;
    col.width = event.element.offsetWidth + 'px';
  }

  onColumnReorder(event: any) {
    console.log('Column reorder event:', event);
    if (!this.config.reorder?.columns) return;
    const cols = [...this.config.columns];
    const dragged = cols.splice(event.dragIndex, 1)[0];
    cols.splice(event.dropIndex, 0, dragged);
    this.config.columns = cols;
  }

  onRowReorder(event: any) {
    if (!this.config.reorder?.rows) return;
    const dragged = this.data.splice(event.dragIndex, 1)[0];
    this.data.splice(event.dropIndex, 0, dragged);
    this.data = [...this.data]; // trigger refresh
  }

  exportCSV() {
    if (!this.config.columns || this.config.columns.length === 0) {
      console.warn('No columns defined. CSV export skipped.');
      return;
    }
    this.table.exportCSV(); // uses built-in PrimeNG CSV export
  }
}
