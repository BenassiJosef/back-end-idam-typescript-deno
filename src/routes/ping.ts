import { Router } from "https://deno.land/x/oak/mod.ts";
import Ping from "../controllers/ping.ts";

const pingRouter = new Router();

pingRouter
  .get("/api/v1/ping", Ping);

export default pingRouter;
