export interface IBaseData<OBJ> {
  code: number;
  errors: IBaseDataError;
  payload: OBJ;
  serviceTime: string;
  success: boolean;
}

export interface IBaseDataError {
  arMessage: string;
  details: any;
  detailsAsString: string;
  enMessage: string;
  timestamp: string;
  type: string;
}
