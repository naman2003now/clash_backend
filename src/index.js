const App = require("./app.js");
const Registration = require("./controllers/registration.controllers.js");
const app = new App([Registration]);
app.listen();

