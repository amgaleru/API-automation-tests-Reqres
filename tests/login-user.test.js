const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Login user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Login user successfully test", async () => {
    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    await spec()
    .post(baseUrl+"/login")
    .withBody(requestBody)
    .expectStatus(200);
  });

  it("Login user unsuccessfully test", async () => {
    await spec()
      .post(baseUrl+"/login")
      .withBody({
        email: "peter@klaven",
      })
      .expectStatus(400);
  });
});
