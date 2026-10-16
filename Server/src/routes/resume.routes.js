import express from 'express';
import { downloadPDF, downloadDOCX } from '../controllers/resume.controllers.js';

const router = express.Router();

router.get('/pdf', downloadPDF);
router.get('/docx', downloadDOCX);

export default router;
