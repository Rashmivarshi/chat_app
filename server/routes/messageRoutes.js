import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { allMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessage);

export default router;
