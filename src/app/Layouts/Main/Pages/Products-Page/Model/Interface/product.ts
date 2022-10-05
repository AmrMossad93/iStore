export interface IProductOBJ {
  catalogueId: string;
  customerName: string;
  productName: string;
  productNumber: string;
  sortByPrice: string;
}

export interface IProduct {
  products: IProductList[]
}

export interface IProductList {
  discount: number;
  name: string;
  nameAr: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  productCode: string;
  productId: string;
  quantity: string;
  total: string;
}
