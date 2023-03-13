import express from "express";
import morgan from "morgan";
//routes
import lenguageRouters from "./route/language.routes"

const app = express();


//settings
app.set("port",4000);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//roputes
app.use("/api/languages",lenguageRouters);

export default app;
