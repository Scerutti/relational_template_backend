import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import exampleRoutes from './routes/exampleRoutes';
import { sequelize } from './config/database';

dotenv.config(); // Carga las variables de entorno desde el archivo .env correspondiente

const app = express();
const PORT = process.env.PORT || 4001;
const env = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());

//TODO Cuando haya base de datos, descomentar y eliminar el app.listen de la linea 35
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexión a la base de datos establecida correctamente.');

//         await sequelize.sync();
//         app.listen(PORT, () => {
//             console.log(`Servidor corriendo en el puerto ${PORT} en modo ${env}`);
//         });
//     } catch (error) {
//         console.error('Error al conectar con la base de datos:', error);
//     }
// })();


app.use('/examples', exampleRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} en modo ${env}`);
});


export default app;