import express, { Express } from "express";

export function createServer() {
  const app: Express = express();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    // console.log(`Server is running at http://localhost:${port}`);
  });

  return app;
}