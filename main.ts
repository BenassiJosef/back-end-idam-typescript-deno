import { serve } from "https://deno.land/std@0.90.0/http/server.ts"

const server = serve({ port: 8000 });

console.log("Now serving on port 8000 🔥");

for await (const req of server) {
    req.respond({ body: "Hello World"});
}
