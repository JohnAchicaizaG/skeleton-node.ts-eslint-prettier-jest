import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Skeleton Node API",
            version: "1.0.0",
            description: "Documentación de la API con Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["src/routes/*.ts", "src/controllers/*.ts"], // Escanea estos archivos
});
