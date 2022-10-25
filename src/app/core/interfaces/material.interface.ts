export interface ITableColumn <T = any> {
  columnDef: string;
  header: string;
  cell: (element: T) => any;
}