export interface IApiReponse <T = any> {
  success: boolean;
  message: string;
  total: number | null;
  result: T;
  error: string;
}
