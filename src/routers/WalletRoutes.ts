// libs
import { Router } from "express";

// controllers
import { ControllerCreateWallet, ControllerGetWallet } from "../controllers";

const ControllerRoutes = Router();

ControllerRoutes.get("/wallet", ControllerCreateWallet);
ControllerRoutes.post("/wallet", ControllerGetWallet);

export { ControllerRoutes };
