import express from "express";
import cors from "cors";
import "dotenv/config";
import requestLogger from "@/middlewares/requestLogger";
import rootRoutes from "@/routes/root.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "@/config/swagger";

const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares
app.use(cors());
app.use(requestLogger);
app.use(express.json());

// Rutas
app.use("/", rootRoutes);

export default app;
