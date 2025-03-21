import { Request, Response } from "express";

export const home = (_req: Request, res: Response) => {
    res.json({
        message: "🚀 Servidor Express con TypeScript funcionando bien",
    });
};
