import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {GridDataResult} from '@progress/kendo-angular-grid';
import {SortDescriptor} from '@progress/kendo-data-query';

@Component({
  selector: 'app-table-data-one',
  templateUrl: './table-data-one.component.html',
  styleUrls: ['./table-data-one.component.css']
})
export class TableDataOneComponent implements OnInit {

  public gridItems: Observable<GridDataResult>;
  public sortDescriptor: SortDescriptor[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.loadGridItems();
  }

  private loadGridItems(): void {
    /*
      this.gridItems = this.service.getProducts(
        this.skip,
        this.pageSize,
        this.sortDescriptor,
        this.filterTerm
      );

     */
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }
}
