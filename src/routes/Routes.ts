import { Router } from "express";
import remitosRoute from "./RemitosRoute";
import viewsRoutes from "./ViewsRoute";
import healthRoute from "./HealthRoute";

const routes = Router();

routes.use("/api", remitosRoute, healthRoute);
routes.use("/", viewsRoutes);

export default routes;
