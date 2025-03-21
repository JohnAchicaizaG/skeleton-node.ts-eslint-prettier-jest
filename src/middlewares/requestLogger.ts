import morgan from "morgan";
import { logger } from "@/config/logger";

const requestLogger = morgan("dev", {
    stream: {
        write: (message) => logger.info(message.trim()),
    },
});

export default requestLogger;
