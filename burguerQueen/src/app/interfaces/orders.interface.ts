import { Options } from "./menu.interface";

export interface Orders {
  date: any;
  id: string;
  customerName: string;
  table: number;
  order: Options[];
  preparation: boolean; 
  done:boolean;
  delivered:boolean;
}
