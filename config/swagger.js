const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Task API',
            version: '1.0.0',
            description: 'REST API documentation'
        },
        servers: [{ url: 'http://localhost:5000' }],
        paths: {
            '/users': {
                get: {
                    summary: 'Return all users',
                    responses: {
                        '200': { description: 'OK' },
                        '500': { description: 'Internal server error' }
                    }
                },
                post: {
                    summary: 'Create a new user',
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
                        '400': { description: 'Invalid input' },
                        '500': { description: 'Internal server error' }
                    }
                }
            },
            '/users/{id}': {
                get: {
                    summary: 'Return a user by ID',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            schema: { type: 'integer' },
                            description: 'The ID of the user to retrieve'
                        }
                    ],
                    responses: {
                        '200': { description: 'OK' },
                        '404': { description: 'User not found' },
                        '500': { description: 'Internal server error' }
                    }
                },
                put: {
                    summary: 'Update username by ID',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            schema: { type: 'integer' },
                            description: 'The ID of the user to update'
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
                        '404': { description: 'User not found' },
                        '500': { description: 'Internal server error' }
                    }
                },
                delete: {
                    summary: 'Delete user by ID',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            required: true,
                            schema: {
                                type: 'integer'
                            },
                            description: 'The ID of the user to delete'
                        }
                    ],
                    responses: {
                        '200': { description: 'OK' },
                        '404': { description: 'User not found' },
                        '500': { description: 'Internal server error' }
                    }
                }
            }
        }
    },
    apis: [],
};

module.exports = swaggerJsDoc(swaggerOptions);