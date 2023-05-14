const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Update put user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Update put user test", async () => {
    const requestBody = {
      name: "morpheus",
      job: "zion resident",
    };

    await spec()
    .put(baseUrl+"/users/2")
    .withBody(requestBody)
    .expectStatus(200);
  });
});
