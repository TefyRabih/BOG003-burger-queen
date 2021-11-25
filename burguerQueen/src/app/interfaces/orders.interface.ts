import { Options } from "./menu.interface";

export interface Orders {
  id: string;
  customerName: string;
  table: number;
  order: Options[];
}
