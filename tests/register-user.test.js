const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Register user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Register user successfully test", async () => {
    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    await spec()
      .post(baseUrl+"/register")
      .withBody(requestBody)
      .expectStatus(200)
      .expectBodyContains("token");
  });

  it("Register user unsuccessfully test", async () => {
    await spec()
      .post(baseUrl+"/register")
      .withBody({
        email: "sydney@fife",
      })
      .expectStatus(400);
  });
});
