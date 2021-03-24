import { Router } from "https://deno.land/x/oak/mod.ts";
import Register from "../controllers/register.ts";

const authRouter = new Router();

authRouter
  .post("/api/v1/register", Register);

export default authRouter;
