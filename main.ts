import { Application } from "https://deno.land/x/oak/mod.ts";
import registerRouter from "./src/routes/register.ts";
import pingRouter from "./src/routes/ping.ts";
import { CognitoIdentityProvider } from "https://deno.land/x/aws_sdk/client-cognito-identity-provider/CognitoIdentityProvider.ts";
import { cyan, green } from "https://deno.land/std@0.84.0/fmt/colors.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import "https://deno.land/std@0.89.0/fs/copy.ts";
const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const body = context.request.body();
  const value = await body.value;
  console.log(
    `${green(context.request.method)} ${cyan(
      decodeURIComponent(context.request.url.pathname)
    )} - ${JSON.stringify(value)}`
  );
});
app.use(oakCors());
app.use(registerRouter.routes());
app.use(registerRouter.allowedMethods());

app.use(pingRouter.routes());
app.use(pingRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`Listening on: ${port}. URL: ${url}`);
});

await app.listen({ port: 8000 });
