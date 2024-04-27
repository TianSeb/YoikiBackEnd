import { Router } from "express";
import remitosRoute from "./RemitosRoute";
import viewsRoutes from "./ViewsRoute";

const routes = Router();

routes.use("/api", remitosRoute);
routes.use("/", viewsRoutes);

export default routes;
