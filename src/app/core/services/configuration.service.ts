import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Settings} from '../config/settings';
import {Observable} from 'rxjs';
import {ITable} from '../interfaces/table.interface';
import {ITableStructure} from '../interfaces/table-structure.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  /**
   * @param _http
   * @param _settings
   */
  constructor(private readonly _http: HttpClient, private readonly _settings: Settings) { }

  /**
   * Get method that returns all tables.
   * @return {Observable} ITable[]
   */
  get(): Observable<ITable[]> {
    return this._http.get<ITable[]>(this._settings.configuration.url.base);
  }

  /**
   * Get method that returns all the tables with detail.
   * @param {number} id
   * @return {Observable} ITableStructure[]
   */
  getDetail(id: number): Observable<ITableStructure[]> {
    return this._http.get<ITableStructure[]>(`${this._settings.configuration.url.detail}/${id}`)
  }

}
