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
                    summary: 'Create new user',
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
            },
            '/users/{id}': {
                delete: {
                    summary: 'Delete user by id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            schema: {
                                type: 'integer'
                            },
                            description: 'The ID of the user you want to delete'
                        }
                    ],
                    responses: {
                        '200': { description: 'OK' },
                        '404': { description: 'User not found' },
                        '500': { description: 'Internal server error' }
                    }
                },
                put: {
                    summary: 'Update username by id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            schema: { type: 'integer' },
                            description: 'The ID of the user you want to update'
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        username: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        '200': { description: 'OK' },
                        '400': { description: 'Invalid input' },
                        '404': { description: 'User not found' }
                    }
                }
            }
        }
    },
    apis: [],
};

module.exports = swaggerJsDoc(swaggerOptions);