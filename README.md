# Super Table – Angular Demo Application
## Screenshots
(Insert screenshots in GitHub repo)
## Installation
git clone https://github.com/kovarthananm/super-table.git
cd super-table-demo
npm install
npm start
## SuperTable Installation
npm install super-table --save
Import:
import { SuperTableComponent } from "super-table";
Usage:
<super-table [config]="tableConfig" [data]="tableData"></super-table>
## Features
Sorting, Pagination, Filtering, Global Search, Templates, Reorder, Resize, Frozen Columns
## Folder Structure
src/app/
■■ super-table-basic/
■■ layout/
■■ app.routes.ts
## Layout Example
<aside class="sidebar">
<ul>
<li><a routerLink="/basic-table">Basic Table</a></li>
<li class="submenu">
<span>Advanced</span>
<ul>
<li><a routerLink="/column-resize">Column Resize</a></li>
</ul>
</li>
</ul>
</aside>
## Build
ng build --prod
## License
MIT