import { IApiReponse } from "./api.interface";

export interface IFoodsResponse extends IApiReponse<IFoodResult[]> {}

export interface IFoodResult {
  _id: string;
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFoodRequest {
  keyword?: string;
}
