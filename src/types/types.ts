export type EqualLengthObjects = {
  (obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean;
};
export type DataResponse = {
  data: boolean;
  message?: string;
};
