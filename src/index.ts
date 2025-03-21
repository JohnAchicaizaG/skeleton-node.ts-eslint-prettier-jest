import express, { Request, Response } from "express";
import { logger } from "@/config/logger";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
    logger.info("🟢 Se recibió una solicitud GET en /");
    res.json({ message: "🚀 Servidor Express con TypeScript funcionando!" });
});

// Iniciar servidor
app.listen(PORT, () => {
    logger.info(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

export {}; // fuerza que se genere un `.d.ts` válido
