import { Request, Response, Router } from "express";
import { askToChatGPT } from "../services/askToChatGPT";

export const mainRouter = Router();

mainRouter.get(`/`, async (_req: Request, res: Response) => {
  try {
    await askToChatGPT();
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
