import { ClientId } from "../aws/config.ts";
import Cognito from "../aws/services/cognito.ts";
import { RegisterData } from "../dataModels/register.ts";

interface RegResponse {
  status: number | undefined;
  body: string;
}

const register = async (payload: RegisterData): Promise<RegResponse> => {
  const newCognitoUser = {
    ClientId: ClientId,
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
    return { status: response.$metadata.httpStatusCode, body: "OK" };
  } catch (error) {
    return { status: error.$metadata.httpStatusCode, body: error.name };
  }
};

export default register;
