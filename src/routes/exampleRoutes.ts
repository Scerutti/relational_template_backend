import { Router } from 'express';
import { getExamples } from '../controllers/ExampleController';

const router = Router();

router.get('/', getExamples);

export default router;
