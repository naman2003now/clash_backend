const { Router } = require("express");
const {
  ROUTE_DOES_NOT_EXIST,
  PATH_DOES_NOT_EXIST,
  IMPROPER_PATH,
} = require("../errors/controller.errors.js");

class Controller {
  router = Router();

  validate() {
    if (!this.router) {
      throw ROUTE_DOES_NOT_EXIST;
    } else if (!this.path) {
      throw PATH_DOES_NOT_EXIST;
    } else if (this.path.charAt(0) != "/") {
      throw IMPROPER_PATH;
    }
    return true;
  }
}

module.exports = Controller;
