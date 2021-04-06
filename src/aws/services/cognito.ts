import {Credentials, Region} from "../config.ts"
import { CognitoIdentityProvider} from "https://deno.land/x/aws_sdk/client-cognito-identity-provider/CognitoIdentityProvider.ts";

const Cognito = new CognitoIdentityProvider({
    credentials: Credentials,
    region: Region,
  });

export default Cognito;