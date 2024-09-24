import exp, { Request, Response, Router } from 'express'
const router:Router = exp.Router()

router.post("/register", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });

  router.post("/follow", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });

  router.get("/search", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });

  router.get("/profile", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });

  router.get("/followers", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });

  router.get("/following", async (req: Request, res: Response): Promise<void> => {
    try {
      res.json({
        err: false,
        message: "i was way too lazy to change the default message",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "i was way too lazy to change the default message",
        date:null
      });
    }
  });
export default router