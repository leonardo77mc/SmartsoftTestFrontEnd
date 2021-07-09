import {Injectable} from "@angular/core";
import { EndPoints } from './end-point';

@Injectable()
export class Settings {

  public configuration = {
    url: {
      base: EndPoints.uriApi("configuration"),
      detail: EndPoints.uriApi("configuration/table-detail"),
    }
  };

}
