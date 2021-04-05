import vs from "https://deno.land/x/value_schema/mod.ts";

export const RegisterDataModel = {
  name: vs.string(),
  familyName: vs.string(),
  email: vs.email(),
  username: vs.email(),
  address: vs.string(),
  password: vs.string({
    minLength: 8,
  }),
};

export interface RegisterData {
  name: string,
  familyName: string,
  email: string,
  username: string,
  address: string,
  password: string
}
