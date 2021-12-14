import { Router } from "express";

import usersRouter from "./users.routes";
import authRoutes from "./auth.routes";

const routes = Router();

routes.use(usersRouter);
routes.use(authRoutes);

export default routes;
