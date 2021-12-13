import { Options } from "./menu.interface";

export interface Orders {
  date: any;
  preparationDate: any;
  doneDate: any;
  deliveredDate: any;
  id: string;
  customerName: string;
  table: number;
  order: Options[];
  done:boolean;
  preparation: boolean; 
  delivered:boolean;
}
