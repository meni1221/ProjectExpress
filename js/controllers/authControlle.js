import exp from "express";
const router = exp.Router();
router.post("/login", async (req, res) => {
    try {
        res.json({
            err: false,
            message: "i was way too lazy to change the default message",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "i was way too lazy to change the default message",
            date: null
        });
    }
});
router.delete("/login", async (req, res) => {
    try {
        res.json({
            err: false,
            message: "i was way too lazy to change the default message",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "i was way too lazy to change the default message",
            date: null
        });
    }
});
export default router;
