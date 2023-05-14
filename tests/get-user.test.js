const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Get single user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get user succesfully test", async () => {
    await spec()
      .get(baseUrl+"/users/2")
      .expectStatus(200)
      .expectJson({
        data: {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar: "https://reqres.in/img/faces/2-image.jpg",
        },
        support: {
          url: "https://reqres.in/#support-heading",
          text: "To keep ReqRes free, contributions towards server costs are appreciated!",
        },
      });
  });

  it("Get single user not found test", async () => {
    await spec()
    .get(baseUrl+"/users/23")
    .expectStatus(404);
  });
});
