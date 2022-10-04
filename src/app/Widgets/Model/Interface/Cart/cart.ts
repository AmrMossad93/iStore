export interface ICart {
  getCarts: ICartData
}

export interface ICartData {
  totalPages: number;
  totalItems: number;
  carts: ICartDataList[];
}

export interface ICartDataList {
  catalogue: ICartDataListCatalogue;
  consumer: ICartDataListConsumer
  cartItems: ICartDataListCartItem[]
}

export interface ICartDataListCatalogue {
  id: number;
  nameEn:string;
}

export interface ICartDataListConsumer {
  email: string;
  name: string;
  id: number;
}

export interface ICartDataListCartItem {
  product: ICartDataListCartItemProduct
}

export interface ICartDataListCartItemProduct {
  id: number;
  name: string;
}
