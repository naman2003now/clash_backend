const { Router } = require("express");
const Controller = require("../interfaces/controller.interface");
const RegistrationModel = require("../models/registration.model.js");

class Registration extends Controller {
  path = "/register";
  router = Router();

  constructor() {
    super();
    this.initilizeRoutes();
  }

  initilizeRoutes() {
    this.router.get("/", (req, res) => {
      res.status(200).send({ message: "Send Nudes" });
    });

    this.router.post("/", async (req, res) => {
      try {
        await RegistrationModel.create(req.body);
        res.status(201).send({message: "Created"});
      } catch (e) {
        res.status(400).send(e);
      }
    });
  }
}

module.exports = Registration;
