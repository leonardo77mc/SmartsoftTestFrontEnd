import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Store, Select} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {ConfigurationActions} from '../../core/store/configuration/configuration.actions';
import {ConfigurationState} from '../../core/store/configuration/configuration.state';
import { Item } from 'src/app/core/interfaces/items.interface';
import {ITable} from '../../core/interfaces/table.interface';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  public dropDownItems: Array<Item>;
  public selectedItem: Item;
  public title = 'Configuración';
  public defaultItem = 'Selecciona una tabla';
  private subscriptions: Subscription[] = [];

 @Select(ConfigurationState.getTables) $dropDownItems: Observable<ITable[]>;

  constructor(private readonly _store: Store) {
    let date = new Date();
    console.log('Date time:', moment(date).format('YYYY-MM-DD HH:mm:ss'));
  }

  ngOnInit(): void {
      this._store.dispatch(new ConfigurationActions.Get());
      this.subscriptions.push(this.$dropDownItems.subscribe((items)=> {
        if(items?.length > 0) {
          this.selectedItem = {text: items[0].name, value: items[0].id};
          this.dropDownItems = [];
          for (const i of items){
            this.dropDownItems.push({
              text: i.name,
              value: i.id
            });
          }
        }
      }))
  }

  public selectionChange(value: any): void {
    this._store.dispatch(new ConfigurationActions.SelectItem(value.value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (sub: Subscription) => {sub.unsubscribe(); }
    );
  }
}
