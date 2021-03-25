//We don't need to return the response object. Deno does this for us automatically.
import { Context } from "https://deno.land/x/oak/mod.ts";
import { Status, STATUS_TEXT } from "https://deno.land/std/http/http_status.ts";

const Ping = (context: Context) => {
  const currentdate = new Date();
  const datetime = "Pinged at: " + currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
  const body = {
    message: "Hello world, from IDAM Deno api v1",
    date: datetime,
    status: STATUS_TEXT.get(Status.OK),
  };
  context.response.status = Status.OK;
  context.response.body = JSON.stringify(body);
};

export default Ping;
