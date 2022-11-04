const supertest = require("supertest");
const App = require("../../app.js");
const Registration = require("../../controllers/registration.controllers.js");
const RegistrationModel = require("../../models/registration.model.js");

const app = new App([Registration]);
const request = supertest(app.app);

beforeAll(async () => {
  await RegistrationModel.deleteMany({});
});

// afterAll(async () => {
//   await RegistrationModel.deleteMany({});
// });

describe("GET /registration", () => {
  it("responds with a status 200", async () => {
    const response = await request.get("/register");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Send Nudes")
  });
});



describe("POST /registration", () => {
  it("responds with a status 201", async () => {
    const response = await request.post("/register").send({
      name: "Naman Agrawal",
      phoneNumber: "8328601462"
    });
    expect(response.status).toBe(201);
  });

  it("responds with a status 400", async () => {
    const response = await request.post("/register").send({
      name: "Naman Agrawal",
    });
    expect(response.status).toBe(400);
  });
});
