export interface ICart {
  getCarts: ICartData
}

export interface ICartData {
  totalPages: number;
  totalItems: number;
  carts:[]
}
