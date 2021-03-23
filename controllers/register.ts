//We don't need to return the response object. Deno does this for us automatically.
import { Context} from "https://deno.land/x/oak/mod.ts";
import vs from "https://deno.land/x/value_schema/mod.ts";
import scrubPayload from "../typeGuards/scrubPayload.ts";
import { Status, STATUS_TEXT } from "https://deno.land/std/http/http_status.ts"
import {equalLength} from "../utils/utils.ts"
import {RegisterDataModel} from "../dataModels/dataModels.ts"

const Register = async (context: Context) => {
    try{
    
        if(!context.request.hasBody) throw {body:STATUS_TEXT.get(Status.BadRequest), status:Status.BadRequest}
        
        const body = context.request.body();

        const type = body.type
        
        if(type !== "json") throw {body:STATUS_TEXT.get(Status.BadRequest), status:Status.BadRequest}

        const payload = await body.value;

        const data = scrubPayload(payload)(RegisterDataModel)(equalLength)(vs.applySchemaObject)

        data === true ? (context.response.status = Status.OK , context.response.body=STATUS_TEXT.get(Status.OK) ) : (context.response.status = Status.BadRequest , context.response.body = STATUS_TEXT.get(Status.BadRequest) )
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