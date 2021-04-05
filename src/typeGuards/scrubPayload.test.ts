import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import scrubPayload from "./scrubPayload.ts";
import { RegisterDataModel } from "../dataModels/register.ts";
import { equalLength } from "../utils/utils.ts";
import vs from "https://deno.land/x/value_schema/mod.ts";

const mockPayload = {
  name: "Test",
  familyName: "McTester",
  email: "tester@test.com",
  username: "test1234",
  address: "test street",
  password: "testSecret12345678",
  password1: "testSecret12345678",
};

Deno.test("payload length differs from defined data model false", () => {
  const { data } = scrubPayload(mockPayload)(RegisterDataModel)(equalLength)(
    vs.applySchemaObject,
  );
  assertEquals(data, false);
});
