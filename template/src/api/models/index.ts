export * from './IApiResponse';
export * from './ICategory';
export * from './IOrder';
export * from './IPet';
export * from './ITag';
export * from './IUser';

export enum FetchState {
  Initial = 0,
  InProgress = 1,
  Finished = 2,
  Error = 3,
  NotFound = 4,
  Obsolete = 5,
}
