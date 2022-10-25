import { MealStatus } from "@core/enums/repast.enum";
import { IApiReponse } from "./api.interface";

export interface IDailyMealResponse extends IApiReponse<IDailyMealResult[]> {}
export interface IFoodsResponse extends IApiReponse<IFoodResult[]> {}
export interface ISaveDailyMealResponse extends IApiReponse<ISaveDailyMealResult[]> {}

export interface IDailyMealRequest {
  scheduleDate?: Date;
}
export interface IDailyMealResult {
  _id: string;
  id: string;
  foods: IFoodResult[];
  scheduleDate: Date;
  mealStatus: MealStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFoodRequest {
  keyword?: string;
}
export type IFoodResult = string;

export interface ISaveDailyMealResult extends Omit<IDailyMealResult, 'foods'> {
  foods: string[]
}
export interface ISaveDailyMealRequest {
  scheduleDate: string;
  mealStatus: MealStatus;
  foods: string[];
}