import {environment} from '../../../environments/environment';

/**
 * Configuration genery class to use the required endpoint.
 */
export class EndPoints {

  static uriApi(url: string): string {
    return environment.url_api + url;
  }

  static uriBase(url: string): string {
    return environment.url_base + url;
  }
}
