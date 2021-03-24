import { Router } from "https://deno.land/x/oak/mod.ts";

const authRouter = new Router();
// controller
import Register from "../controllers/register.ts";

authRouter
  .post("/api/register", Register);

export default authRouter;
