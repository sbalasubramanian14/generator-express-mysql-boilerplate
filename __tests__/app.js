"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-express-mysql-boilerplate:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ projectName: "my-api-project" })
      .withPrompts({ databaseName: "mydatabase" })
      .withPrompts({ databaseHost: "127.0.0.1" })
      .withPrompts({ databaseUsername: "admin" })
      .withPrompts({ databasePassword: "admin@123" });
  });

  it("creates files", () => {
    assert.file(["package.json"]);
  });
});
