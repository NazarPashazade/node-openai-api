import bodyParser from "body-parser";
import helmet from "helmet";
import { mainRouter } from "./routers/main-router";
import { createServer } from "./server";
import { askToChatGPT } from "./services/askToChatGPT";

export const app = createServer();

app.use(helmet());

app.use(bodyParser());

app.use(mainRouter);

// askToChatGPT()