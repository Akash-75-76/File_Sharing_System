import express from 'express';
import { uploadImage,downloadImage } from "../controller/image-controller.js";
import upload from '../utils/s3-upload.js';  // Changed to S3 upload
const router=express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);
export default router;