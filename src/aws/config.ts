export const Credentials = {
  accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID") || "",
  secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY") || "",
};
export const Region = Deno.env.get("AWS_REGION") || "";
export const UserPoolId = Deno.env.get("AWS_USER_POOL_ID") || "";
export const ClientId = Deno.env.get("AWS_USER_POOL_CLIENT_ID") || "";