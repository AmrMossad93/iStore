export interface ICatalogue {
  catalogues: ICatalogueList[];
}

export interface ICatalogueList {
  catalogueId: string;
  catalogueName: string;
  catalogueNameAr: string;
  customer: string;
  description: string;
  descriptionAr: string;
  salesOrderType: string;
  salesOrderTypeId: string;
}
