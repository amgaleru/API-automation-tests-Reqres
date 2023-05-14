const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Delete user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete user test", async () => {
    await spec()
      .put(baseUrl+"/users/2")
      .expectStatus(200);
  });
});
