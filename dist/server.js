"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routers_1 = require("./routers");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use(routers_1.ControllerRoutes);
app.listen(3100, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${3100}`);
});
//# sourceMappingURL=server.js.map