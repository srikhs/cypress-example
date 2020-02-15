export interface IApiResponse<T> {
  status: number;
  value?: T;
  error?: { [key: string]: string } | string | undefined;
}
