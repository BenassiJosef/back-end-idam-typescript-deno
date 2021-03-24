import { SchemaObject } from "https://deno.land/x/value_schema@v3.0.0/dist-deno/libs/types.ts";
import { DataResponse, EqualLengthObjects } from "../types/types.ts";

const scrubPayload = (ojb: Record<string, unknown> = {}) => {
  return (compareObj: SchemaObject) => {
    return (equalLength: EqualLengthObjects) => {
      return (
        checkSchema: (arg0: SchemaObject, arg1: unknown) => void,
      ): DataResponse => {
        try {
          if (!equalLength(ojb, compareObj)) {
            return { data: false, message: "Incorrect payload length" };
          }
          checkSchema(compareObj, ojb);
          return { data: true };
        } catch (error) {
          //add a proper stadard out logger
          console.log(error);
          return { data: false, message: error.message };
        }
      };
    };
  };
};
export default scrubPayload;
