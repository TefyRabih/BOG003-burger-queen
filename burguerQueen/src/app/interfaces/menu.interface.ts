export interface Menu {
  id: string;
  name: string;
  img: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  options: Options[];
}

export interface Options {
  id: string;
  name: string;
  price: number;
  qty: number;
}
