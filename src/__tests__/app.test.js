const supertest = require("supertest");
const App = require("../app.js");

const app = new App([]);
const request = supertest(app.app);

describe("App", () => {
  it("should be created", () => {
    expect(app).toBeInstanceOf(App);
  });
});

describe("GET /", () => {
  it("responds with a status 200", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
