/**
 * Action namespace for configuration states.
 */
export namespace ConfigurationActions {

  export class SelectItem {
    static readonly type = '[Configurations] select item';
    constructor(public payload: number) {
    }
  }

  export class Get {
    static readonly type = '[Configurations] get tables';
  }

  export class GetDetail {
    static readonly type = '[Configurations] get detail of table';
    constructor(public payload: number) {
    }
  }

  export class Default {
    static readonly type = '[configurations] default item';
  }

}
