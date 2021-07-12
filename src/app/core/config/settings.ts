import {Injectable} from '@angular/core';
import {EndPoints} from './end-point';

/**
 * Configuration class to declare all the End points with @Injectable to use it in the required services.
 */
@Injectable()
export class Settings {

  public configuration = {
    url: {
      base: EndPoints.uriApi('configuration'),
      detail: EndPoints.uriApi('configuration/table-detail'),
    }
  };

  public Tables = {
    url: {}
  };

}
