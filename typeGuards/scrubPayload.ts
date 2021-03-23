import { SchemaObject } from "https://deno.land/x/value_schema@v3.0.0/dist-deno/libs/types.ts";
import {EqualLengthObjects} from "../types/types.ts"

const scrubPayload = (ojb: Record<string, unknown> = {})  => {
    return (compareObj : SchemaObject) => {
        return (equalLength : EqualLengthObjects) => {
            return (checkSchema: (arg0: SchemaObject, arg1: unknown) => void) : boolean =>{
                try {
                    if (!equalLength(ojb,compareObj)) return false
                    checkSchema(compareObj,ojb);
                    return true
                } catch (error) {
                    //add a proper stadard out logger
                    console.log(error)
                    return false
                }
            }
        }
    }
}
export default scrubPayload