const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Task API',
            version: '1.0.0',
        },
        servers: [{ url: 'http://localhost:5000' }],
        paths: {
            '/users': {
                get: {
                    summary: 'Return all users',
                    responses: {
                        '200': { description: 'OK' }
                    }
                },
                post: {
                    summary: 'Membuat user baru',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        username: { type: 'string' },
                                        email: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        '201': { description: 'OK' },
                        '400': { description: 'Invalid input' }
                    }
                }
            }
        }
    },
    apis: [],
};

module.exports = swaggerJsDoc(swaggerOptions);