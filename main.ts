import { Application } from "https://deno.land/x/oak/mod.ts";
import authRouter from "./routes/auth.ts";
import {
  bold,
  cyan,
  green,
  yellow,
} from "https://deno.land/std@0.84.0/fmt/colors.ts";

const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const body = context.request.body();
  const value = await body.value;
  console.log(
    `${green(context.request.method)} ${
      cyan(decodeURIComponent(context.request.url.pathname))
    } - ${JSON.stringify(value)}`,
  );
});

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`Listening on: ${port}. URL: ${url}`);
});

await app.listen({ port: 8000 });
