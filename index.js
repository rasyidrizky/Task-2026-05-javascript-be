const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 5000;

const sequelize = require('./config/database.js');
const swaggerDocs = require('./config/swagger.js');

const userRoutes = require('./routes/userRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(errorHandler);

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
            console.log(`API Documentation available at http://localhost:${port}/api-docs`);
        });
    } catch (error) {
        console.error('Unable to run server:', error);
    }
}

connect();