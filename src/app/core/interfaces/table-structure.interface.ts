export interface ITableStructure {
  id: number,
  name: string,
  columns: IColumns[];
}

export interface IColumns {
  id: number,
  header: string,
  dataType: string,
  format: string;
  required: boolean;
}
