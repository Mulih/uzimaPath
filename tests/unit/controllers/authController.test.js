const request = require('supertest');
const express = require('express');
const authController = require('./controllers/authController');

// Mock the User model
jest.mock('../models/User', () => {
  return {
    findOne: jest.fn().mockResolvedValue(null),
    save: jest.fn(),
  };
});

describe('Auth Controller Tests', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.post('/register', authController.register); // Assuming '/register' is the endpoint
  });

  it('should register a new user', async () => {
    const mockReq = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await authController.register(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Registration successful!',
    });
  });


});