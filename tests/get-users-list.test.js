const { spec, request  } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Get all user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get all users test", async () => {
    await spec()
    .get(baseUrl+"/users?page=2")
    .expectStatus(200)
    .expectBodyContains('michael.lawson@reqres.in');
  });
});
