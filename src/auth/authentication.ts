import { ClientId } from "../aws/config.ts";
import Cognito from "../aws/services/cognito.ts";
import { RegisterData } from "../dataModels/register.ts";

const register = async (payload: RegisterData) => {
  const newCognitoUser = {
    ClientId: Deno.env.get("AWS_USER_POOL_CLIENT_ID") || "",
    Username: payload.username,
    Password: payload.password,
    UserAttributes: [
      {
        Name: "email",
        Value: payload.email,
      },
      {
        Name: "name",
        Value: payload.name,
      },
      {
        Name: "family_name",
        Value: payload.familyName,
      },
      {
        Name: "address",
        Value: payload.address,
      },
    ],
  };

  try {
    const response = await Cognito.signUp(newCognitoUser);
    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.log(error);
  }
};

export default register;
