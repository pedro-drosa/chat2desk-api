import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/auth", authController.store);

export default authRoutes;
