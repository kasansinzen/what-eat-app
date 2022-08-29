import { RepastStatus } from "@core/enums/repast.enum";
import { IFoodResult } from "./api-food.interface";
import { IApiReponse } from "./api.interface";

export interface IRepastResponse extends IApiReponse<IRepastResult[]> {}
export interface ISaveRepastResponse extends IApiReponse<ISaveRepastResult[]> {}

export interface IRepastResult {
  _id: string;
  id: string;
  foods: IFoodResult[];
  sheduleDate: Date;
  repastStatus: RepastStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISaveRepastResult extends Omit<IRepastResult, 'foods'> {
  foods: string[]
}
export interface ISaveRepastRequest {
  sheduleDate: Date;
  repastStatus: RepastStatus;
  foods: string[];
}