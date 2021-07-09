import {State, Action, StateContext, Selector} from '@ngxs/store';
import {ConfigurationService} from '../../services/configuration.service';
import {ConfigurationActions} from './configuration.actions';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ITable} from '../../interfaces/table.interface';
import {ITableStructure} from '../../interfaces/table-structure.interface';

export class ConfigurationStateModel {
  public seletItem: number;
  public tables: ITable[];
  public tableStructure: ITableStructure[];
}

const defaults = {
  selectItem: undefined,
  tables: [],
  tableStructure: [],
};

@State({
  name: 'configurations',
  defaults
})
@Injectable()
export class ConfigurationState {

  constructor(private readonly _configurationService: ConfigurationService) {
  }

  @Selector()
  static selectItem(state: ConfigurationStateModel): number {
    return state.seletItem;
  }

  @Selector()
  static getTables(state: ConfigurationStateModel): ITable[] {
    return state.tables;
  }

  @Selector()
  static getDetail(state: ConfigurationStateModel): ITableStructure[] {
    return state.tableStructure;
  }

  @Action(ConfigurationActions.SelectItem)
  seletItem(
    ctx: StateContext<ConfigurationStateModel>,
    action: ConfigurationActions.SelectItem
  ): void {
    ctx.patchState({
      seletItem: action.payload
    });
  }

  @Action(ConfigurationActions.Get)
  get(
    ctx: StateContext<ConfigurationStateModel>
  ): Observable<ITable[]> {
    return this._configurationService.get()
      .pipe(
        tap((success) => {
          ctx.patchState({
            tables: success
          });
        }));
  }

  @Action(ConfigurationActions.GetDetail)
  getDetail(
    ctx: StateContext<ConfigurationStateModel>,
    action: ConfigurationActions.GetDetail
  ): Observable<ITableStructure[]> {
    return this._configurationService.getDetail(action.payload)
      .pipe(
        tap((success) => {
          ctx.patchState({
            tableStructure: success
          });
        }));
  }

  @Action(ConfigurationActions.Default)
  setDefault(
    ctx: StateContext<ConfigurationStateModel>
  ): void {
    ctx.patchState({
      seletItem: null
    });
  }

}
