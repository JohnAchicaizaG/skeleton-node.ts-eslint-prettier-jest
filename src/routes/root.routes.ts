import { home } from "@/controllers/root.controller";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Ruta de prueba para verificar si el servidor está activo
 *     tags:
 *       - Root
 *     responses:
 *       200:
 *         description: Respuesta exitosa con un mensaje de estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 🚀 Servidor Express con TypeScript funcionando bien
 */
router.get("/", home);

export default router;
