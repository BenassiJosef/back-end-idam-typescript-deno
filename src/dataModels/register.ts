import vs from "https://deno.land/x/value_schema/mod.ts";

export const RegisterDataModel = {
  firstname: vs.string(),
  lastname: vs.string(),
  email: vs.email(),
  username: vs.string(),
  address: vs.string(),
  password: vs.string({
    minLength: 8,
  }),
};
