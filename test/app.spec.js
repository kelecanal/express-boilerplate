const app = require("../src/app");

describe("App module", () => {
  describe("Hello world", () => {
    it("GET / should return 200 with Hello World", () => {
      return supertest(app).get("/").expect(200, { message: "Hello, world!" });
    });
  });
});
