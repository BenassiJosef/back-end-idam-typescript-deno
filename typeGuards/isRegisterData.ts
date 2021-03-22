import vs from "https://deno.land/x/value_schema/mod.ts";
import {lengthsMatch} from "../utils/utils.ts"

type DataResponse = {
    data: boolean,
    message?: string
}
const registerData =  {
    firstName: vs.string(),
    lastName: vs.string(),
    email:vs.email(),
    userName:vs.string(),
    address: vs.string(),
    password:vs.string({
        minLength: 8
    })
}
const isRegisterData = (ojb: Record<string, unknown> = {}) : DataResponse => {
    try {
        lengthsMatch(ojb,registerData,"Incorrect payload format")
        vs.applySchemaObject(registerData , ojb)
        return {data: true}
      } catch (error) {
        console.error(error.message);
        return {data:false, message:error.message}
      }
} 

export default isRegisterData