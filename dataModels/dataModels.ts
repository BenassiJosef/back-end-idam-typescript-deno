import vs from "https://deno.land/x/value_schema/mod.ts";

export const RegisterDataModel =  {
    firstName: vs.string(),
    lastName: vs.string(),
    email:vs.email(),
    userName:vs.string(),
    address: vs.string(),
    password:vs.string({
        minLength: 8
    })
}