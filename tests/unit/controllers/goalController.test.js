import request from 'supertest';
import express from 'express';
import { getGoals } from './goalController';

jest.mock('../models/Goal', () => {
  return {
    find: jest.fn(),
  };
});

describe('Get Goals Tests', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.get('/goals', getGoals);
  });

  it('should retrieve goals successfully', async () => {
    const mockGoals = [{ id: 1, title: 'Goal 1' }, { id: 2, title: 'Goal 2' }];
    Goal.find.mockResolvedValue(mockGoals);

    const res = await request(app).get('/goals');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockGoals);
  });

  it('should handle error when Goal.find() fails', async () => {
    const mockError = new Error('Mock error');
    Goal.find.mockRejectedValue(mockError);

    const res = await request(app).get('/goals');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: 'Couldnt display goals. Try again after a few minutes.' });
  });
});