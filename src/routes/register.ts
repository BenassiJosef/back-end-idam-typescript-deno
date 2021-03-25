import { Router } from "https://deno.land/x/oak/mod.ts";
import Register from "../controllers/register.ts";

const registerRouter = new Router();

registerRouter
  .post("/api/v1/register", Register);

export default registerRouter;
