//We don't need to return the response object. Deno does this for us automatically.
import { Context} from "https://deno.land/x/oak/mod.ts";
import isRegisterData from "../typeGuards/isRegisterData.ts";
import { Status, STATUS_TEXT } from "https://deno.land/std/http/http_status.ts"

const Register = async (context: Context) => {
    try{
    
        if(!context.request.hasBody) throw {body:STATUS_TEXT.get(Status.BadRequest), status:Status.BadRequest}
        
        const body = context.request.body();

        const type = body.type
        if(type !== "json") throw {body:STATUS_TEXT.get(Status.BadRequest), status:Status.BadRequest}

        const value = await body.value;
        
        const {data, message} = isRegisterData(value)

        data === true ? (context.response.status = Status.OK , context.response.body=STATUS_TEXT.get(Status.OK) ) : (context.response.status = Status.BadRequest , context.response.body = message )

    }
    // when the request fails
    catch(e) {
        context.response.body = e.body;
        context.response.status = e.status;
        // need to put a standard out logger here
        console.log("errors",e);
    }
}

export default Register