const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Create post user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create post user test", async () => {
    const requestBody = {
      name: "morpheus",
      job: "leader",
    };

    await spec()
    .post(baseUrl+"/users")
    .withBody(requestBody)
    .expectStatus(201);
  });
});
