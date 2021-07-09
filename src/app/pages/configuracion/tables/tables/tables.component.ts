import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IColumns, ITableStructure} from '../../../../core/interfaces/table-structure.interface';
import {Select, Store} from '@ngxs/store';
import {ConfigurationState} from '../../../../core/store/configuration/configuration.state';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfigurationActions} from '../../../../core/store/configuration/configuration.actions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, OnDestroy {

  public formTableStructure: FormGroup;
  public titles: string[] = [];
  public add = 'Datos';
  private subscriptions: Subscription[] = [];
  public tableStructure: ITableStructure[] = [];
  public columns: IColumns[] = [];

  @Select(ConfigurationState.getDetail) $details: Observable<ITableStructure[]>;
  @Select(ConfigurationState.selectItem) $selectItem: Observable<number>;

  constructor(private _store: Store, private _fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.subscriptions.push(this.$selectItem.subscribe((id) => {
      if (id != null) {
        this._store.dispatch(new ConfigurationActions.GetDetail(id));
      }
    }));

    this.subscriptions.push(this.$details.subscribe((items) => {
      console.log('tabla structure:', items);
      if (items?.length > 0) {
        this.tableStructure = [];
        this.tableStructure = items;
        for (const i of items) {

        }
      }
    }));

  }

  ngOnDestroy(): void {
    this._store.dispatch(new ConfigurationActions.Default());
    this.subscriptions.forEach(
      (sub: Subscription) => {
        sub.unsubscribe();
      }
    );
  }
}
