require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 6969;

class App {
  app = express();
  constructor(controllers) {
    this.connectToMongoDB();
    this.useMiddlewares();
    this.initilizeHomeRoute();
    this.initilizeControllers(controllers);
  }

  useMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  initilizeHomeRoute() {
    this.app.get("/", (req, res) => {
      res.send("Clash API");
    });
  }

  initilizeControllers(controllers) {
    controllers.forEach((Controller) => {
      const controller = new Controller();
      if (controller.validate()) {
        this.app.use(controller.path, controller.router);
      }
    });
  }

  async connectToMongoDB() {
    mongoose.connect(process.env.DATABASE_URL, () => {
      console.log(`Connected to ${process.env.DATABASE_URL}`);
    });
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  }
}

module.exports = App;
