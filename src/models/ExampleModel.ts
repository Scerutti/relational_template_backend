import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class ExampleModel extends Model {
    public id!: number;
    public name!: string;
}

ExampleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'example', // Nombre de la tabla en la base de datos
        sequelize,
    }
);

sequelize.sync(); // Esto sincroniza los modelos con la base de datos (crea las tablas si no existen)
