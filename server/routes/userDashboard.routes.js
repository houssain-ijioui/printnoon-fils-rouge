import express from "express";
const router = express.Router()
import protect from "../middlwares/auth.middlware.js";
import userDashboardController from "../controllers/userDashboard.controller.js";
import upload from "../middlwares/fileUploader.js";


router.post('/create-order', upload.single('file'), userDashboardController.createOrder);
router.get('/orders', userDashboardController.orders)
router.delete('/order/:orderId', userDashboardController.deleteOrder);
router.post('/change-image', upload.single('image'), userDashboardController.changeImage)


export default router;
