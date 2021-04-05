import {Credentials} from "../config.ts"
import { CognitoIdentityProvider } from "https://deno.land/x/aws_sdk/client-cognito-identity-provider/CognitoIdentityProvider.ts";

const Cognito = new CognitoIdentityProvider({
    credentials: Credentials,
    region: Deno.env.get("AWS_REGION") || "",
  });

export default Cognito;