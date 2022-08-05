// libs
import * as express from "express";

// routes
import { ControllerRoutes } from "./routers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Server ON");
});

app.use(ControllerRoutes);

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
});
