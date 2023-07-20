import { Request, Response } from 'express';
import { ExampleModel } from '../models/ExampleModel';

export const getExamples = async (_req: Request, res: Response): Promise<void> => {
    try {
        const examples = await ExampleModel.findAll();
        res.json(examples);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los ejemplos' });
    }
};
